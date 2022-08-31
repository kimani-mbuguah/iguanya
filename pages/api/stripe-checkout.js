const keys = require("../../server/config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

export default async (req, res) => {
  try {
    await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description:
        "Taiker - React Next Digital Marketing & IT Startup Template",
      source: req.body.token.id,
    });
    res.send("Payment Done");
  } catch (err) {
    // console.log(err.message)
  }
};
