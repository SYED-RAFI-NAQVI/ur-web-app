"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SignIn() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-200 text-black">
      {step === 1 && <EmailForm onNext={handleNext} />}
      {step === 2 && <NameForm onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <CountryForm onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <AddressForm onNext={handleNext} onBack={handleBack} />}
      {step === 5 && (
        <InvestorStatusForm onNext={handleNext} onBack={handleBack} />
      )}
      {step === 6 && <TermsConditionsForm onBack={handleBack} />}
    </div>
  );
}

function EmailForm({ onNext }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-gray-800 mb-2 text-center">
        Welcome to Ur Wealth
      </p>
      <p className="text-sm font-semibold text-gray mb-4 text-center">
        Thankyou for being for early adapter to start enjoying the benifits.
        <br />
        Lets setup your account
      </p>
      <div className="rounded-2xl max-w-md w-full flex flex-col justify-between">
        <div className="">
          <input
            type="text"
            placeholder="abcd@gmail.com"
            className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl focus:outline-none"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function NameForm({ onNext, onBack }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-2xl max-w-xl w-full">
        <div className="">
          <div className="w-full pr-4">
            <p className="text-3xl text-left font-semibold text-gray-800 mb-4">
              What’s your legal name?
            </p>
          </div>
          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="First Name"
              className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="text-gray">
            Use your full name as written
            <br />
            in government-issued Identification.
          </p>
          <div>
            <button
              className="text-black rounded-full px-6 py-2 font-medium hover:shadow-xl focus:outline-none mr-3"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl focus:outline-none"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountryForm({ onNext, onBack }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-2xl max-w-2xl w-full flex flex-col">
        <div>
          <p className="text-3xl text-left font-semibold text-gray-800 mb-4">
            What’s your country citizenship?
          </p>
          <div className="flex flex-col">
            <select className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl">
              <option>United States</option>
              {/* Add more countries as options */}
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="text-gray">
              Select the country of <br /> your current Passport.
            </p>
          </div>
          <div>
            <button
              className="text-black rounded-full px-6 py-2 font-medium hover:shadow-xl focus:outline-none mr-2"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl focus:outline-none"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressForm({ onNext, onBack }) {
  return (
    <div className="p-8 rounded-2xl max-w-xl w-full flex flex-col">
      <div className="">
        <div className="w-full pr-4">
          <p className="text-3xl text-left font-semibold text-gray-800 mb-4">
            What’s your legal address?
          </p>
        </div>
        <div className="w-full flex flex-col">
          <input
            type="text"
            placeholder="Address line 1"
            className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4"
          />
          <input
            type="text"
            placeholder="Apartment No."
            className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4"
          />
          <input
            type="text"
            placeholder="City"
            className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4"
          />
          <select className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4">
            <option>State</option>
            {/* Add more states as options */}
          </select>
          <input
            type="text"
            placeholder="Pin Code"
            className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4"
          />
          <select className="text-xl text-gray-700 outline-none py-2 px-4 rounded-2xl w-full mb-4">
            <option>Country</option>
            {/* Add more countries as options */}
          </select>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-500">
              I confirm that this is my mailing address
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="text-gray">
          You may be required to prove
          <br /> the provided address.
        </p>
        <div>
          <button
            className="text-black rounded-full px-6 py-2 font-medium hover:shadow-xl focus:outline-none mr-3"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl focus:outline-none"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function InvestorStatusForm({ onNext, onBack }) {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-2xl max-w-xl w-full flex flex-col">
        <div className="">
          <div className="w-full pr-4">
            <p className="text-3xl text-left font-semibold text-gray-800 mb-4">
              What’s your investor status?
            </p>
          </div>
          <div
            className="w-full flex flex-col overflow-y-auto"
            style={{ maxHeight: "300px" }}
          >
            <label className="block text-xl font-semibold mb-2">
              Retail Investor:
            </label>
            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "retail"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("retail")}
            >
              <input
                type="radio"
                name="investorStatus"
                checked={selectedStatus === "retail"}
                className="mr-2"
                onChange={() => handleStatusChange("retail")}
              />
              <span>
                Your annual income is less than $200k for the past 2 years, and
                you expect the same this year.
              </span>
            </div>
            <label className="block text-xl font-semibold mb-2">
              Accredited Investor:
            </label>
            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "accredited1"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("accredited1")}
            >
              <input
                type="radio"
                name="investorStatus"
                checked={selectedStatus === "accredited1"}
                className="mr-2"
                onChange={() => handleStatusChange("accredited1")}
              />
              <span>
                Your net worth, combined with spouse, exceeds $1M (excluding
                primary residence).
              </span>
            </div>
            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "accredited2"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("accredited2")}
            >
              <div className="">
                <input
                  type="radio"
                  name="investorStatus"
                  checked={selectedStatus === "accredited2"}
                  className="mr-2"
                  onChange={() => handleStatusChange("accredited2")}
                />
                <span>
                  Your annual income has exceeded $200k for the past 2 years,
                  and you expect the same this year.
                </span>
              </div>
            </div>

            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "accredited3"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("accredited3")}
            >
              <input
                type="radio"
                name="investorStatus"
                checked={selectedStatus === "accredited3"}
                className="mr-2"
                onChange={() => handleStatusChange("accredited3")}
              />
              <span>
                Your net worth, combined with spouse, exceeds $1M (excluding
                primary residence).
              </span>
            </div>

            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "accredited4"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("accredited4")}
            >
              <input
                type="radio"
                name="investorStatus"
                checked={selectedStatus === "accredited4"}
                className="mr-2"
                onChange={() => handleStatusChange("accredited4")}
              />
              <span>
                Your net worth, combined with spouse, exceeds $1M (excluding
                primary residence).
              </span>
            </div>

            <label className="block text-xl font-semibold mb-2">
              Qualified Client:
            </label>
            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "client"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("client")}
            >
              <input
                type="radio"
                name="investorStatus"
                checked={selectedStatus === "client"}
                className="mr-2"
                onChange={() => handleStatusChange("client")}
              />
              <span>
                Your net worth, combined with spouse, exceeds $2.2M (excluding
                primary residence).
              </span>
            </div>
            <label className="block text-xl font-semibold mb-2">
              Qualified Purchaser:
            </label>
            <div
              className={`mb-4 border-2 rounded-lg p-2 cursor-pointer ${
                selectedStatus === "purchaser"
                  ? "bg-black text-white border-none"
                  : "bg-transparent border-gray-300 text-black"
              }`}
              onClick={() => handleStatusChange("purchaser")}
            >
              <input
                type="radio"
                name="investorStatus"
                checked={selectedStatus === "purchaser"}
                className="mr-2"
                onChange={() => handleStatusChange("purchaser")}
              />
              <span>Your investments exceed $5M.</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="text-gray">
            This determines your eligibility for private
            <br />
            investments and expanded pricing options.
          </p>
          <div>
            <button
              className="text-black rounded-full px-6 py-2 font-medium hover:shadow-xl focus:outline-none mr-3"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl focus:outline-none"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsConditionsForm({ onBack }) {
  const router = useRouter();
  return (
    <div className="p-8 rounded-2xl max-w-xl w-full flex flex-col">
      <div className="">
        <div className="pr-4">
          <p className="text-3xl font-semibold text-gray-800 mb-4">
            Terms & Conditions
          </p>
          <p className="text-gray-500 mb-4">
            UrWealth cannot show you investment advisory services or products
            before you sign this IMA due to SEC regulations.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg overflow-y-auto max-h-48 mb-4">
            <p className="text-gray-800 text-sm">
              A. TERMS OF SALE B. ITUNES STORE TERMS AND CONDITIONS C. MAC APP
              STORE, APP STORE, APP STORE FOR APPLE TV AND IBOOKS STORE TERMS
              AND CONDITIONS D. APPLE MUSIC TERMS AND CONDITIONS THE LEGAL
              AGREEMENTS SET OUT BELOW GOVERN YOUR USE OF THE ITUNES STORE, MAC
              APP STORE, APP STORE, APP STORE FOR APPLE TV, IBOOKS STORE AND
              APPLE MUSIC SERVICES ("SERVICES"). TO AGREE TO THESE TERMS, CLICK
              "AGREE." IF YOU DO NOT AGREE TO THESE TERMS, DO NOT CLICK "AGREE,"
              AND DO NOT USE THE SERVICES. A. TERMS OF SALE PAYMENTS, TAXES, AND
              REFUND POLICY You agree that you will pay for all products you
              purchase through the Services, and that Apple may charge your
              payment method for any products purchased and for any additional
              amounts (including any taxes and late fees, as applicable) that
              may be accrued by or in connection with your Account. YOU ARE
              RESPONSIBLE FOR THE TIMELY PAYMENT OF ALL FEES AND FOR PROVIDING
              APPLE WITH A VALID PAYMENT METHOD FOR PAYMENT OF ALL FEES.
              <br />
              <br />
              The prices for products offered through the Services may change at
              any time, and the Services do not provide price protection or
              refunds in the event of a price reduction or promotional offering.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <input type="checkbox" className="mr-2 mt-1" />
            <p className="text-gray-500">
              I have read and agree to{" "}
              <a href="#" className="text-blue-500 underline">
                E-SIGN Consent
              </a>{" "}
              to use Electronic Records, Disclosures, and Signatures.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <input type="checkbox" className="mr-2 mt-1" />
            <p className="text-gray-500">
              By Checking this Box, I have read and understood the context of{" "}
              <a href="#" className="text-blue-500 underline">
                Part II Brochure
              </a>
              , Form CRS, Terms & Conditions, and Privacy Policy.
            </p>
          </div>
          <div className="flex items-start mb-2">
            <input type="checkbox" className="mr-2 mt-1" />
            <p className="text-gray-500">
              By Checking this Box, I am Signing and agree to the Terms of
              UrWealth Investment Management Agreement.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-8">
        <button
          className="text-black rounded-full px-6 py-2 font-medium hover:shadow-xl focus:outline-none mr-3"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl focus:outline-none"
          onClick={() => router.push("/")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignIn;
