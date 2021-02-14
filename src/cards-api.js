import { firestore } from "./firebase-db";
import { autoId } from "./helpers/autoId";

export async function addCard(card) {
  const id = autoId();
  const cardRef = firestore.collection("cards").doc(id);
  if (!cardRef) {
    console.log("initialize signals first");
  }
  const data = { id, ...card, status: "created", dateCreated: new Date().toISOString() };
  await cardRef.set(data);
  return data;
}

export async function getCardById(cardId) {
  const doc = await firestore
    .collection("cards")
    .doc(cardId)
    .get();
  if (doc.exists) {
    return doc.data();
  }
  return null;
}
