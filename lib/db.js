import { MongoClient } from "mongodb";

export const getClient = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://ryaaan7:0oLHN9Ml0gD5CEK0@cluster0.vfeg5xa.mongodb.net/meetup-list?retryWrites=true&w=majority"
  );

  //   const db = client.db();

  return client;
};
