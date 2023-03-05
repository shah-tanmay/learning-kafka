import kafka from "kafka-node";

const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);

const event = { category: "DOG", noise: "bark" };

const payloads = [{ topic: "test", messages: JSON.stringify(event) }];

const sendMessage = () => {
  producer.send(payloads, (err, data) => {
    console.log("message sent to the stream successfully");
  });
};
producer.on("ready", () => {
  setInterval(sendMessage, 3000);
});

producer.on("error", function (err) {});
