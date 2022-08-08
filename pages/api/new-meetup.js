import { MongoClient } from "mongodb";
import { getClient } from "../../lib/db";

// /api/new-meetup
// POST api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    // const client = await MongoClient.connect(
    //   "mongodb+srv://ryaaan7:0oLHN9Ml0gD5CEK0@cluster0.vfeg5xa.mongodb.net/meetup-list?retryWrites=true&w=majority"
    // );

    // const db = client.db();

    const client = await getClient();

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added" });
  }
};

export default handler;
