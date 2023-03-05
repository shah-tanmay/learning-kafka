import kafka from "kafka-node";

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
const consumer = new Consumer(client, [{ topic: "test", partition: 0 }], {
  autoCommit: false,
});

consumer.on("message", (message) => {
  console.log(JSON.parse(message.value));
});
