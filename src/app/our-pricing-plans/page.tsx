import { Suspense } from "react";
import PricingClient from "../our-pricing-plans/PricingClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading pricing plans...</div>}>
      <PricingClient />
    </Suspense>
  );
}

// "use client";

// export const dynamic = "force-dynamic";
// import React, { useEffect, useMemo, useState, useRef } from "react";
// import { useSearchParams } from "next/navigation";

// import Nav from "@/components/Nav";
// import Footer from "@/components/Footer";

// // ✅ IMPORT DATA FROM JSON
// import pricingTests from "@/data/pricing-tests.json";

// type TestItem = {
//   id: number;
//   testDetails: string;
//   sampleType?: string;
//   method?: string;
//   mrp?: number | string;
// };

// const ITEMS_PER_PAGE = 50;

// export default function PricingPage() {
//   const [highlightId, setHighlightId] = useState<number | null>(null);

//   const [items, setItems] = useState<TestItem[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [query, setQuery] = useState<string>("");
//   const searchParams = useSearchParams();
//   const urlSearch = searchParams.get("search");

//   // ✅ ROW REFS FOR AUTO-SCROLL
//   const rowRefs = useRef<Record<number, HTMLTableRowElement | null>>({});

//   // ✅ LOAD JSON DATA
//   useEffect(() => {
//     setItems(pricingTests as TestItem[]);
//   }, []);

//   useEffect(() => {
//     if (!urlSearch || items.length === 0) return;

//     const q = urlSearch.toLowerCase();
//     setQuery(urlSearch);

//     const index = items.findIndex(
//       (it) =>
//         String(it.id).includes(q) ||
//         it.testDetails.toLowerCase().includes(q) ||
//         String(it.mrp).includes(q)
//     );

//     if (index !== -1) {
//       const targetPage = Math.floor(index / ITEMS_PER_PAGE) + 1;
//       setHighlightId(items[index].id);
//       setPage(targetPage);
//     }
//   }, [urlSearch, items]);

//   // ✅ FILTERED DATA (FOR DISPLAY)
//   // const filtered = useMemo(() => {
//   //   if (!query.trim()) return items;
//   //   const q = query.toLowerCase();

//   //   return items.filter(
//   //     (it) =>
//   //       String(it.id).includes(q) ||
//   //       it.testDetails.toLowerCase().includes(q) ||
//   //       String(it.mrp).includes(q)
//   //   );
//   // }, [items, query]);

//   // ✅ PAGINATION
//   const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
//   const startIndex = (page - 1) * ITEMS_PER_PAGE;
//   const currentPageItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   useEffect(() => {
//     if (page > totalPages) setPage(totalPages);
//   }, [page, totalPages]);

//   useEffect(() => {
//     if (highlightId == null) return;

//     const timeout = setTimeout(() => {
//       const row = rowRefs.current[highlightId];
//       if (!row) return;

//       row.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });

//       row.classList.add("blink-row");

//       setTimeout(() => {
//         row.classList.remove("blink-row");
//       }, 2000);
//     }, 300); // ⬅️ IMPORTANT delay for DOM render

//     return () => clearTimeout(timeout);
//   }, [page, highlightId]);

//   return (
//     <>
//       <Nav />

//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
//           {/* HEADER */}
//           <header className="px-6 py-6 border-b flex justify-center">
//             <h1 className="text-2xl md:text-3xl font-semibold">
//               Our Pricing Plans
//             </h1>
//           </header>

//           {/* SEARCH */}
//           <div className="px-6 py-4 border-b">
//             <input
//               type="search"
//               value={query}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 setQuery(value);

//                 if (!value.trim()) {
//                   setHighlightId(null);
//                   return;
//                 }

//                 const q = value.toLowerCase();

//                 const index = items.findIndex(
//                   (it) =>
//                     String(it.id).includes(q) ||
//                     it.testDetails.toLowerCase().includes(q) ||
//                     String(it.mrp).includes(q)
//                 );

//                 if (index !== -1) {
//                   const targetPage = Math.floor(index / ITEMS_PER_PAGE) + 1;
//                   setHighlightId(items[index].id);
//                   setPage(targetPage);
//                 }
//               }}
//               placeholder="Search by test name, id or price..."
//               className="w-full md:w-96 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B7AB]"
//             />
//           </div>

//           {/* TABLE */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50 sticky top-0">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-medium">
//                     S. No.
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-medium">
//                     Test Details
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-medium">
//                     Sample Type
//                   </th>
//                   <th className="px-4 py-3 text-left text-sm font-medium">
//                     Method
//                   </th>
//                   <th className="px-4 py-3 text-right text-sm font-medium">
//                     MRP (₹)
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="bg-white divide-y">
//                 {currentPageItems.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="px-4 py-8 text-center text-gray-500"
//                     >
//                       No tests found.
//                     </td>
//                   </tr>
//                 ) : (
//                   currentPageItems.map((it) => (
//                     <tr
//                       key={it.id}
//                       ref={(el) => {
//                         rowRefs.current[it.id] = el;
//                       }}
//                       className="hover:bg-gray-50"
//                     >
//                       <td className="px-4 py-3">{it.id}</td>
//                       <td className="px-4 py-3">{it.testDetails}</td>
//                       <td className="px-4 py-3">{it.sampleType || "-"}</td>
//                       <td className="px-4 py-3">{it.method || "-"}</td>
//                       <td className="px-4 py-3 text-right font-medium">
//                         {it.mrp}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* PAGINATION */}
//           <div className="px-6 py-4 border-t flex justify-between items-center">
//             <span className="text-sm text-gray-600">
//               Showing {Math.min(startIndex + 1, items.length)} –{" "}
//               {Math.min(startIndex + ITEMS_PER_PAGE, items.length)} of{" "}
//               {items.length}
//             </span>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setPage(1)}
//                 disabled={page === 1}
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//               >
//                 First
//               </button>
//               <button
//                 onClick={() => setPage((p) => Math.max(1, p - 1))}
//                 disabled={page === 1}
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//               >
//                 Prev
//               </button>

//               <span className="px-3 py-1 border rounded bg-white">{page}</span>

//               <button
//                 onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={page === totalPages}
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//               >
//                 Next
//               </button>
//               <button
//                 onClick={() => setPage(totalPages)}
//                 disabled={page === totalPages}
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//               >
//                 Last
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }
