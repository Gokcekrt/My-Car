import { offers } from "./offers";

export function getOfferByIndex() {
  const offerCount = offers.length;
  return Math.floor(Math.random() * offerCount);
}
