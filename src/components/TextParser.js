import React, { useCallback, useEffect, useState } from "react";
export default function TextParser(props) {
  const [text, settext] = useState("");
  const [email, setemail] = useState("No email found");
  const [PhoneNumbers, setPhoneNumbers] = useState([]);
  const [urls, setUrls] = useState([""]);

  const handleonChange = (event) => {
    settext(event.target.value);
  };
  useEffect(() => {
    if (text !== undefined) {
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      const emailMatches = text.match(emailRegex);

      if (emailMatches === null) {
        // No email addresses found
      } else {
        // Process emailMatches as needed
        const uniqueEmails = Array.from(new Set(emailMatches));
        const finalUniqueEmails = uniqueEmails.map((email) =>
          email.endsWith(".") ? email.slice(0, -1) : email
        );

        const formattedEmails = finalUniqueEmails.join("\n\n").toLowerCase();
        setemail(formattedEmails);
      }
    }
  }, [text, settext]);
  useEffect(() => {
    // Phone number extraction logic
    const phoneRegex = /\b(?:\+\d{1,2}\s?)?(?:\(\d{1,4}\)\s?)?[0-9.-]+\d\b/g;
    const phoneMatches = text.match(phoneRegex);

    if (phoneMatches === null) {
      setPhoneNumbers(["No phone numbers found"]);
    } else {
      const uniquePhones = Array.from(new Set(phoneMatches));
      setPhoneNumbers(uniquePhones);
    }
  }, [text]);
  useEffect(() => {
    // URL extraction logic
    const urlRegex = /\b(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*\b/g;
    const urlMatches = text.match(urlRegex);

    if (urlMatches === null) {
      setUrls(["No URLs found"]);
    } else {
      const uniqueUrls = Array.from(new Set(urlMatches));
      setUrls(uniqueUrls);
    }
  }, [text]);
  const handleBackspace = () => {
    setemail("No email found");
  };
  return (
    <>
      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>Input Text for Extraction</h2>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handleBackspace();
              }
            }}
            style={{
              background: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
      </div>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div>Emails: {email}</div>
      <div>Phone Numbers: {PhoneNumbers.join("\n\n")}</div>
      <div>Urls: {urls.join("\n\n")}</div>
      </div>
    </>
  );
}
