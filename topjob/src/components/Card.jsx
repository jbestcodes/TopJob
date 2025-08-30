export default function Card({ children }) {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div>{children}</div>
            </div>
    );
}