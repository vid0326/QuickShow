import { Inngest } from "inngest";
import User from "../models/user.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const {
      id,
      first_name = "",
      last_name = "",
      email_addresses = [],
      image_url = ""
    } = event.data || {};

    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address || "",
      name: `${first_name} ${last_name}`.trim(),
      image: image_url
    };

    await User.create(userData);

    
  }
);

// inngest function to delete user from the database 

const syncUserDeletion = inngest.createFunction(
    {id:'delete-user-with-clerk'},
    {event:'clerk/user.deleted'},
    async ({event})=>{
        const { id}= event.data
        await User.findByIdAndDelete(id)
    }
)

const syncUserUpdate = inngest.createFunction (
    {id:'update-user-from-clerk'},
    {event:'clerk/user.updated'},
    async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url}=event.data|| {}

        const userData = {
            _id:id,
            email:email_addresses[0]?.email_address||"",
            name:`${first_name} ${last_name}`.trim(),
            image:image_url
        }

        await User.findByIdAndUpdate(id,userData)
        

    }
)



export const functions = [syncUserCreation,
    syncUserDeletion,syncUserUpdate];
