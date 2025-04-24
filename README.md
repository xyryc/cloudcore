# CloudCore Store ☁️🛍️

A stylish hoodie product display and ordering page built with **Next.js**, **Tailwind CSS**, **Redux Toolkit**, **shadcn/ui**, and **lucide-react**.

### 🔗 Live Preview

👉 [cloudcore-store.vercel.app](https://cloudcore-store.vercel.app/)

---

### ⚙️ Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **shadcn/ui**
- **lucide-react**
- **Redux Toolkit** (for order state management)
- **REST API** (for order placement)

---

### ✨ Features

- ✅ Responsive 2-column product layout
- 🖼️ High-quality product image with dynamic URL
- 🔖 Category and stock badges
- 💰 Price & discount info
- 🧾 Modal-based order form with courier & quantity
- 🚀 Order placement handled via Redux Toolkit
- ✅ Live feedback on order success/failure

---

### 🧠 Project Structure

- `ProductClient.tsx` — Main product display component
- `PlaceOrderForm.tsx` — Handles order form logic and dispatch
- `orderSlice.ts` — Redux slice to manage order state
- `store.ts` — Configures Redux store
- `types.ts` — TypeScript type definitions for product and order

---

### 🧪 Local Setup (Optional)

```bash
git clone https://github.com/xyryc/cloudcore0.git
cd cloudcore-store
npm install
npm run dev
```
