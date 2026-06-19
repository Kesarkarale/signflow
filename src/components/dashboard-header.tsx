"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import {
Bell,
Upload,
Search,
LogOut,
FileText,
} from "lucide-react";

export default function DashboardHeader() {
return (

<div
className="
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-6
mb-6
"
>

<div className="flex items-center gap-4">

<Image
src="/logo.png"
alt="SignFlow"
width={55}
height={55}
className="rounded-2xl"
/>

<div>
<h1 className="text-4xl font-bold">
Dashboard
</h1>

<p className="text-slate-500 mt-1">
Welcome back to SignFlow 👋
</p>
</div>

</div>

<div className="flex items-center gap-3 flex-wrap">

<div className="relative hidden md:block">

<Search
size={18}
className="
absolute
left-4
top-1/2
-transform
-translate-y-1/2
text-slate-400
"
/>

<input
type="text"
placeholder="Search documents..."
className="
pl-11
pr-4
py-3
rounded-2xl
border
dark:border-slate-700
bg-white
dark:bg-slate-900
outline-none
w-72
"
/>

</div>

<button
className="
relative
h-12
w-12
rounded-2xl
border
dark:border-slate-700
bg-white
dark:bg-slate-900
flex
items-center
justify-center
"

>

<Bell size={20} />

<span
className="
absolute
top-2
right-2
h-2
w-2
bg-red-500
rounded-full
"
/> </button>

<Link
href="/upload"
className="
flex
items-center
gap-2
bg-blue-600
hover:bg-blue-700
text-white
px-5
py-3
rounded-2xl
font-semibold
"
>
<Upload size={18} />
Upload PDF
</Link>

<Link
href="/create-document"
className="
flex
items-center
gap-2
bg-purple-600
hover:bg-purple-700
text-white
px-5
py-3
rounded-2xl
font-semibold
"
>
<FileText size={18} />
Create PDF
</Link>

<div
className="
h-12
w-12
rounded-full
bg-gradient-to-r
from-blue-500
to-indigo-600
text-white
font-bold
flex
items-center
justify-center
"
>
K
</div>

<button
onClick={() => signOut()}
className="
flex
items-center
gap-2
bg-red-500
hover:bg-red-600
text-white
px-4
py-3
rounded-2xl
font-semibold
"

>

<LogOut size={18} />
Logout
</button>

</div>

</div>
);
}
