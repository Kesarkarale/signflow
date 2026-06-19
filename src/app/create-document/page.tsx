"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
FileText,
Sparkles,
PenSquare,
ShieldCheck,
ArrowRight,
Loader2,
} from "lucide-react";
import PageWithSidebar from "@/components/PageWithSidebar";

export default function CreateDocumentPage() {
const router = useRouter();

const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [loading, setLoading] = useState(false);

async function createDocument() {
if (!title || !content) {
alert("Please fill all fields");
return;
}

setLoading(true);

try {
const res = await fetch(
"/api/documents/create-text",
{
method: "POST",
headers: {
"Content-Type":
"application/json",
},
body: JSON.stringify({
title,
content,
}),
}
);

const data = await res.json();

if (res.ok) {
router.push(
`/documents/${data.id}`
);
}
} finally {
setLoading(false);
}
}

return (
<PageWithSidebar>
<div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">

<div className="max-w-7xl mx-auto space-y-8">

<div
className="
bg-gradient-to-r
from-blue-600
via-indigo-600
to-purple-600
rounded-3xl
p-10
text-white
shadow-xl
"
>

<div className="flex items-center gap-4 mb-4">

<div
className="
h-16
w-16
rounded-2xl
bg-white/20
flex
items-center
justify-center
"
>
<FileText size={30} />
</div>

<div>
<h1 className="text-5xl font-bold">
Create Document
</h1>

<p className="text-blue-100 mt-2">
Generate professional documents
for digital signatures.
</p>
</div>

</div>

<div className="grid md:grid-cols-3 gap-4 mt-8">

<div className="bg-white/10 rounded-2xl p-4">
<div className="text-2xl font-bold">
100%
</div>
<div className="text-sm text-blue-100">
Secure Signing
</div>
</div>

<div className="bg-white/10 rounded-2xl p-4">
<div className="text-2xl font-bold">
PDF
</div>
<div className="text-sm text-blue-100">
Ready Export
</div>
</div>

<div className="bg-white/10 rounded-2xl p-4">
<div className="text-2xl font-bold">
Fast
</div>
<div className="text-sm text-blue-100">
Document Workflow
</div>
</div>

</div>

</div>

<div className="grid lg:grid-cols-3 gap-8">

<div
className="
lg:col-span-2
bg-white
dark:bg-slate-900
border
dark:border-slate-800
rounded-3xl
p-8
shadow-sm
"
>

<h2 className="text-2xl font-bold mb-6">
Document Editor
</h2>

<div className="space-y-5">

<div>
<label className="font-medium">
Document Title
</label>

<input
value={title}
onChange={(e) =>
setTitle(e.target.value)
}
placeholder="Employment Agreement"
className="
w-full
mt-2
border
rounded-2xl
p-4
focus:ring-2
focus:ring-blue-500
outline-none
"
/>

</div>

<div>
<label className="font-medium">
Document Content
</label>

<textarea
value={content}
onChange={(e) =>
setContent(e.target.value)
}
rows={16}
placeholder="Write your document..."
className="
w-full
mt-2
border
rounded-2xl
p-4
focus:ring-2
focus:ring-blue-500
outline-none
"
/>
</div>

<button
onClick={createDocument}
disabled={loading}
className="
w-full
bg-blue-600
hover:bg-blue-700
text-white
rounded-2xl
py-4
font-semibold
flex
items-center
justify-center
gap-2
"
>
{loading ? (
<>
<Loader2
size={18}
className="animate-spin"
/>
Creating...
</>
) : (
<>
Create Document
<ArrowRight size={18} />
</>
)}
</button>

</div>

</div>

<div className="space-y-6">

<div
className="
bg-white
dark:bg-slate-900
border
dark:border-slate-800
rounded-3xl
p-6
"
>

<div className="flex items-center gap-3 mb-4">
<Sparkles
className="text-black-500"
/>

<h3 className="font-bold">
Templates
</h3>
</div>

<div className="space-y-3">

<button
onClick={() =>
setContent(
"Employment Agreement between Company and Employee..."
)
}
className="w-full text-left p-3 rounded-xl bg-slate-100"
>
Employment Contract
</button>

<button
onClick={() =>
setContent(
"Non Disclosure Agreement..."
)
}
className="w-full text-left p-3 rounded-xl bg-slate-100"
>
NDA Agreement
</button>

<button
onClick={() =>
setContent(
"Freelance Service Agreement..."
)
}
className="w-full text-left p-3 rounded-xl bg-slate-100"
>
Freelance Contract
</button>

</div>

</div>

<div
className="
bg-blue
dark:bg-slate-900
border
dark:border-slate-800
rounded-3xl
p-6
"
>

<div className="flex items-center gap-3 mb-4">
<PenSquare
className="text-blue-500"
/>

<h3 className="font-bold">
Preview
</h3>
</div>

<div className="border rounded-2xl p-4 min-h-[200px] text-sm text-slate-600 overflow-auto">
<h4 className="font-bold mb-3">
{title ||
"Document Title"}
</h4>

{content ||
"Your document preview will appear here..."}
</div>

</div>

<div
className="
bg-gradient-to-r
from-green-500
to-emerald-600
text-white
rounded-3xl
p-6
"
>

<div className="flex items-center gap-3">
<ShieldCheck />

<h3 className="font-bold">
Enterprise Security
</h3>
</div>

<p className="mt-3 text-sm">
Every document is encrypted and
audit tracked.
</p>

</div>

</div>

</div>

</div>

</div>
  </PageWithSidebar>
);
}
