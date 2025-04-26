import Link from 'next/link';

export default function Sidebar() {
return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
    <h2 className="text-2xl font-bold mb-6">educEdge</h2>
    <Link href="/profile" className="mb-4 hover:text-blue-400">Profile</Link>
    <Link href="/messages" className="mb-4 hover:text-blue-400">Messages</Link>
    <Link href="/tutors" className="mb-4 hover:text-blue-400">Tutors</Link>
    <button className="mt-auto bg-red-600 px-4 py-2 rounded" onClick={() => supabase.auth.signOut()}>
        Sign Out
    </button>
    </div>
    );
}