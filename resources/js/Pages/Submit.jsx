import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const counties = [
    { name: "Mombasa", code: 1 },
    { name: "Kwale", code: 2 },
    { name: "Kilifi", code: 3 },
    { name: "Tana River", code: 4 },
    { name: "Lamu", code: 5 },
    { name: "Taita-Taveta", code: 6 },
    { name: "Garissa", code: 7 },
    { name: "Wajir", code: 8 },
    { name: "Mandera", code: 9 },
    { name: "Marsabit", code: 10 },
    { name: "Isiolo", code: 11 },
    { name: "Meru", code: 12 },
    { name: "Tharaka-Nithi", code: 13 },
    { name: "Embu", code: 14 },
    { name: "Kitui", code: 15 },
    { name: "Machakos", code: 16 },
    { name: "Makueni", code: 17 },
    { name: "Nyandarua", code: 18 },
    { name: "Nyeri", code: 19 },
    { name: "Kirinyaga", code: 20 },
    { name: "Murang'a", code: 21 },
    { name: "Kiambu", code: 22 },
    { name: "Turkana", code: 23 },
    { name: "West Pokot", code: 24 },
    { name: "Samburu", code: 25 },
    { name: "Trans-Nzoia", code: 26 },
    { name: "Uasin Gishu", code: 27 },
    { name: "Elgeyo-Marakwet", code: 28 },
    { name: "Nandi", code: 29 },
    { name: "Baringo", code: 30 },
    { name: "Laikipia", code: 31 },
    { name: "Nakuru", code: 32 },
    { name: "Narok", code: 33 },
    { name: "Kajiado", code: 34 },
    { name: "Kericho", code: 35 },
    { name: "Bomet", code: 36 },
    { name: "Kakamega", code: 37 },
    { name: "Vihiga", code: 38 },
    { name: "Bungoma", code: 39 },
    { name: "Busia", code: 40 },
    { name: "Siaya", code: 41 },
    { name: "Kisumu", code: 42 },
    { name: "Homa Bay", code: 43 },
    { name: "Migori", code: 44 },
    { name: "Kisii", code: 45 },
    { name: "Nyamira", code: 46 },
    { name: "Nairobi", code: 47 },
];

const ages = [
    {
        id: 1,
        value: "18 - 24",
    },
    {
        id: 2,
        value: "25 - 30",
    },
    {
        id: 3,
        value: "31 - 35",
    },
    {
        id: 4,
        value: "Above 35",
    },
];

export default function Submit() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        time: "",
        email: "",
        county: "",
        experience: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        router.post("/experiences", formData, {
            onSuccess: () => {
                toast.success("Experience Submitted Successfully!");
                setFormData({
                    name: "",
                    age: "",
                    time: "",
                    email: "",
                    county: "",
                    experience: "",
                });
                setLoading(false);
                setTimeout(() => {
                    router.visit("/experiences");
                }, 2000);
            },
            onError: (errors) => {
                setMessage(errors.message || "Submission failed.");
                setLoading(false);
            },
        });
    };
    return (
        <div className="bg-white text-[#3A3A3A] min-h-screen font-opensans leading-8">
            {/* Add ToastContainer here */}
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-white max-w-[80%] mx-auto">
                <div className="flex flex-1 justify-center md:justify-start">
                    <Link href="/">
                        <img src="/images/logo.png" width="80" alt="logo" />
                    </Link>
                </div>
                <Link
                    className="hidden md:flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-white hover:bg-[#166E38] hover:text-white text-[#166E38] font-medium rounded-full min-w-max px-6 py-4"
                    href="/experiences"
                >
                    Other experiences
                </Link>
            </header>

            {/* Hero Section with Form */}
            <section className="flex flex-col justify-center items-center px-8 py-16 bg-white">
                <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full min-w-[40%]">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center font-opensans leading-7">
                        Share Your Experience
                    </h1>
                    <p className="text-gray-700 max-w-2xl text-center">
                        Access to IDs is a major barrier to young people's
                        political participation.
                    </p>
                    <form className="space-y-2 pt-4" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block text-gray-800 font-normal mb-1 text-sm">
                                Name <span className="text-red-800">*</span>
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-800 font-normal mb-1 text-sm">
                                Age <span className="text-red-800">*</span>
                            </label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Age Group</option>
                                {/* Add county options here */}
                                {ages.map((age) => (
                                    <option key={age.id} value={age.value}>
                                        {age.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-800 font-normal mb-1 text-sm">
                                County <span className="text-red-800">*</span>
                            </label>
                            <select
                                className="w-full p-3 border rounded-lg"
                                name="county"
                                value={formData.county}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select County</option>
                                {/* Add county options here */}
                                {counties.map((county) => (
                                    <option
                                        key={county.code}
                                        value={county.name}
                                    >
                                        {county.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-800 font-normal mb-1 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-800 font-normal mb-1 text-sm">
                                How long did it take you?
                            </label>
                            <textarea
                                className="w-full p-2 border rounded-lg h-15"
                                required
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-800 font-normal mb-1 text-sm">
                                Your Experience{" "}
                                <span className="text-red-800">*</span>
                            </label>
                            <textarea
                                className="w-full p-2 border rounded-lg h-32"
                                required
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 text-sm border border-[#166E38] shadow bg-[#166E38] hover:bg-[#166E38] text-white font-medium rounded-full px-16 py-4 transition-all hover:scale-105"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>

                            {message && (
                                <p className="text-sm text-red-500">
                                    {message}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-8 text-center bg-gray-50 w-full mx-auto">
                Siasa Place &copy; 2025
            </footer>
        </div>
    );
}
