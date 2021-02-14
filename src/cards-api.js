import { firestore } from "./firebase-db";
import { autoId } from "./helpers/autoId";

export function addCard(card) {
  const id = autoId();
  const cardRef = firestore.collection("cards").doc(id);
  if (!cardRef) {
    console.log("initialize signals first");
  }
  const data = { id, ...card, status: "created", dateCreated: new Date().toISOString() };
  cardRef.set(data);
  return data;
}
