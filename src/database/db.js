import mongoose from "mongoose"

async function connectDataBase(){
    await mongoose.connect(
        "mongodb+srv://thiagoocarvalho:LoRVlNc7wNBBXUzv@cluster0.bhouxas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
}

export default connectDataBase