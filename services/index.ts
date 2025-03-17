import { ContactFormData } from "../components/contactForm";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { firestore } from "../firebaseConfig";


export const sendContactForm = async ({
  firstName,
  lastName,
  email,
  phone,
  comment,
}: ContactFormData) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      firstName,
      lastName,
      email,
      phone,
      comment,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};