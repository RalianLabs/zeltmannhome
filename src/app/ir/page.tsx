import { redirect } from "next/navigation";

// Cambia esta URL para actualizar el destino del QR sin reimprimirlo
const QR_DESTINATION = "https://zeltmannhome-nerja.vercel.app/";

export default function QRRedirect() {
  redirect(QR_DESTINATION);
}
