const MedicineModel = require("../models/Medicine");

class Medicine {
  unitPerPackType = "10";
  packSize = "20 x 10";
  packType = "strip ";
  pricePerUnit = 10;

  brand = "Ubuntu";

  tags = "cancer, heart, bone";

  purpose = `This medicine is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.`;

  howToUse = `Take paracetamol by mouth with food as directed by the doctor.\n
  Swallow the tablet whole with water.\n
  Do not crush, chew, or split the tablet.\n
  Take paracetamol regularly to get the most benefit from it.\n
  To help remember, take paracetamol at the same time.\n
  Quantity is based on your medical condition and response to treatment.\n
  Do not increase your quantity or take this product more often than directed.`;

  expertAdvice = `Tablets may be crushed or swallowed whole.\n
  Please immediately contact your doctor in case of any serious adverse effects.\n
  Avoid consumption of alcohol during use of this medicine.\n
  Drink plenty of water to prevent dehydration.`;

  primaryUses = `Fever and pain`;

  indications = `This medicine is used to treat acute and chronic (short and long term) painful muscular conditions, tension, headache, dysmenorrhea (painful menstruation), and non-articular rheumatism (a group of conditions characterized by muscular aches which do not arise from joints).`;

  sideEffects = `This medicine has no known side effects. However if you do experience any unusual side effects please make sure to consult your doctor.\n
  An allergic reaction to this medicine is uncommon. If you do experience a rash, itching, swelling, dizziness or trouble breathing, seek medical attention immediately.`;

  warnings = `There is no evidence of risk associated with the use of this medicine in pregnant females. However, it is best to consult your doctor before use\nThe effects of this medicine in lactating females are undetermined. Therefore, please consult your doctor before use.\nIts use has shown a risk of drowsiness; therefore avoid using it while driving.\nConsult your doctor before using paracetamol for a better analysis if you have liver disease.`;

  precautions = `Serious skin reactions may also occur with the use of this medication. Patients should be warned of the symptoms of such reactions and advised to discontinue the medication immediately if they appear. Patients with hypersensitivity or allergy to this medication should also be cautioned against its use. Patients should also inform their doctor of their complete medical history, especially any history of liver problems or alcohol abuse or if they have diabetes or any condition that requires them to avoid sugar. Consult your healthcare provider for more details.`;

  contraindictions = `This medication is contraindicated in patients with severe heart impairment, alcoholism (alcohol dependency), weight lower than 50 kg, renal (kidney) or hepatic (liver) impairment, malnutrition, dehydration, and anemia(lower than normal amount of red blood cells in the blood). Contact your healthcare provider for further information.`;

  faqs = JSON.stringify([
    {
      question: "How does this medicine work?",
      answer:
        "This medicine works by blocking (neurotransmitters) chemical messengers in the brain that inform us that we have pain. It also reduces fever by affecting the neurotransmitters in the area of the brain that manages or regulates body temperature.",
    },
    {
      question: "Can I take this medicine for a long time?",
      answer:
        "It is not recommended to take this medicine for more than 3 days unless advised by your doctor otherwise.",
    },
    {
      question: "What happens if you take this medicine for a long time?",
      answer:
        "Studies have shown that long term use of medicine is associated with a risk of adverse events such as heart attacks, bleeding inside the digestive system and hinders kidney function.",
    },
    {
      question: "What are the signs of overdose of this medicine?",
      answer:
        "Having difficulty breathing and passing out are some signs of an overdose of this medicine.",
    },
    {
      question: "What to do if you miss a dose of this medicine?",
      answer:
        "Please take your dosage as per the prescription. If you miss a dose, take it as soon as you remember. If the time for the next dose is close, take medicine normally. Do not double the dose.",
    },
  ]);

  constructor(name, image, type, size, price, discount, category, dn) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.size = size;
    this.price = price;
    this.discount = discount;
    this.category = category;
    this.doctorNote = dn;
  }
}

const medicines = [
  new Medicine(
    "panadol",
    "panadol.png",
    "tablet",
    "100mg",
    120,
    10,
    "homeopathic",
    false
  ),
  new Medicine(
    "asprine",
    "asprine.png",
    "tablet",
    "10mg",
    150,
    0,
    "homeopathic",
    false
  ),
  new Medicine(
    "phaki",
    "phaki.png",
    "capsoule",
    "20mg",
    50,
    10,
    "homeopathic",
    false
  ),
  new Medicine(
    "sarang",
    "sarang.png",
    "cyrup",
    "500mg",
    250,
    25,
    "homeopathic",
    false
  ),
  new Medicine(
    "frajil",
    "frajil.png",
    "tablets",
    "30mg",
    65,
    15,
    "daily well being",
    false
  ),
  new Medicine(
    "risek",
    "risek.png",
    "tablets",
    "30mg",
    85,
    18,
    "daily well being",
    false
  ),
  new Medicine(
    "krishma",
    "krishma.png",
    "tablets",
    "25mg",
    99,
    20,
    "daily well being",
    false
  ),
  new Medicine(
    "juice",
    "juice.png",
    "cyrup",
    "100mg",
    100,
    5,
    "daily well being",
    false
  ),
  new Medicine("zendal", "zendal.png", "tablet", "20mg", 30, 0, "other", true),
  new Medicine(
    "discord",
    "discord.png",
    "tablet",
    "20mg",
    30,
    0,
    "other",
    true
  ),
  new Medicine(
    "salajeet",
    "salajeet.png",
    "tablet",
    "20mg",
    30,
    0,
    "other",
    true
  ),
  new Medicine(
    "crunch",
    "crunch.png",
    "tablet",
    "10mg",
    80,
    10,
    "other",
    false
  ),
  new Medicine("fresh", "fresh.png", "cyrup", "150mg", 150, 25, "other", false),
];

const generateData = async () => {
  try {
    const pills = await MedicineModel.find();
    if (pills.length < medicines.length) {
      await MedicineModel.insertMany(medicines);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = generateData;
