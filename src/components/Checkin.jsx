import React from "react";
import { useForm } from "react-hook-form";


const Checkin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data: ", data);
        alert("Form submitted successfully!");
    };

    return (
        <>

            <div className=" w-full flex justify-between px-10 py-5 text-2xl text-white" style={{ backgroundColor: "#feae11" }}>
                <h1>Welcome</h1>
                <a href="/">X</a>
            </div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <form
                    className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="text-2xl font-bold text-black mb-2 text-center">
                        Visitor Recording
                    </h1>


                    <p className="text-center mb-3">Business Name: Minou Nails</p>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Number of Visitors
                        </label>
                        <select
                            {...register("visitors", { required: "This field is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="">Select</option>
                            {[...Array(10).keys()].map((num) => (
                                <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                </option>
                            ))}
                        </select>
                        {errors.visitors && (
                            <p className="text-red-500 text-sm">{errors.visitors.message}</p>
                        )}
                    </div>


                    <div className="mb-4">

                        <input
                            type="text" placeholder="Full Name"
                            {...register("fullName", { required: "Full Name is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            {...register("contactNumber", {
                                required: "Contact Number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit number",
                                },
                            })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.contactNumber && (
                            <p className="text-red-500 text-sm">
                                {errors.contactNumber.message}
                            </p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>


                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            {...register("confirmationEmail")}
                            className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-gray-700">
                            I would like a confirmation email
                        </label>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Instagram ID
                        </label>
                        <input
                            type="text"
                            {...register("instagramId")}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Service Name
                        </label>
                        <input
                            type="text"
                            {...register("serviceName", { required: "Service Name is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.serviceName && (
                            <p className="text-red-500 text-sm">{errors.serviceName.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Service Done By
                        </label>
                        <input
                            type="text"
                            {...register("technician", { required: "This field is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.technician && (
                            <p className="text-red-500 text-sm">{errors.technician.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Amount Paid
                        </label>
                        <input
                            type="number"
                            {...register("amountPaid", { required: "Amount Paid is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.amountPaid && (
                            <p className="text-red-500 text-sm">{errors.amountPaid.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Payment Mode
                        </label>
                        <select
                            {...register("paymentMode", { required: "Payment Mode is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="">Select</option>
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.paymentMode && (
                            <p className="text-red-500 text-sm">{errors.paymentMode.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Any Feedback
                        </label>
                        <textarea
                            {...register("feedback")}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            rows="3"
                        ></textarea>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Referred By
                        </label>
                        <select
                            {...register("referredBy", { required: "This field is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        >
                            <option value="">Select</option>
                            <option value="Friend">Friend</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Advertisement">Advertisement</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.referredBy && (
                            <p className="text-red-500 text-sm">{errors.referredBy.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Signature
                        </label>
                        <input
                            type="text"
                            {...register("signature", { required: "Signature is required" })}
                            className="w-full border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Enter your name as signature"
                        />
                        {errors.signature && (
                            <p className="text-red-500 text-sm">{errors.signature.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                {...register("agreement", { required: "You must agree to proceed" })}
                                className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-gray-700">
                                I Agree*
                                <span className="block text-gray-500 text-sm">
                                    No Refunds: All sales are final and the Company does not offer any
                                    money-back guarantees.
                                </span>
                            </label>
                        </div>
                        {errors.agreement && (
                            <p className="text-red-500 text-sm">{errors.agreement.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Rate Your Experience *
                        </label>
                        <div className="flex space-x-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <label key={star} className="flex items-center space-x-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        {...register("rating", { required: "Rating is required" })}
                                        value={star}
                                        className="hidden"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-yellow-500 fill-current"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 17.27l6.18 3.64-1.64-7.03 5.46-4.73-7.19-.61L12 2 9.19 8.54l-7.19.61 5.46 4.73-1.64 7.03L12 17.27z"
                                        />
                                    </svg>
                                    <span className="text-sm">{star}</span>
                                </label>
                            ))}
                        </div>
                        {errors.rating && (
                            <p className="text-red-500 text-sm">{errors.rating.message}</p>
                        )}
                    </div>


                    <div className="mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                {...register("subscribeToMarketing")}
                                className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-gray-700">
                                Subscribe to Marketing (Optional)
                                <p className="text-gray-500 text-sm">
                                    I would like to receive the latest updates, promotions, and news from
                                    the business.
                                </p>
                            </label>
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 focus:outline-none"
                    >
                        Check In
                    </button>



                </form>
            </div>
        </>
    );
};

export default Checkin;
