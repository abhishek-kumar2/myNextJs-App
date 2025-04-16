export default function Navbar() {
    return (
        <nav className="bg-gray-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">My Blog</div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-200">Home</a></li>
                    <li><a href="/about" className="text-white hover:text-gray-200">About</a></li>
                    <li><a href="/timeline" className="text-white hover:text-gray-200">Timeline</a></li>
                </ul>
            </div>
        </nav>
    )
}