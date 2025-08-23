import { useState } from "react";
import AdminAction from "../../action/admin.action";

function Queries() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [queryType, setQueryType] = useState("");
  const [question, setQuestion] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) => {
      const isValidType = /\.(pdf|jpe?g|png|gif)$/i.test(file.name);
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB

      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      alert("Some files were invalid or too large (max 10MB each).");
    }

    setSelectedFiles(validFiles);
  };

  const submitData = async () => {
    let dataToSend = {
      name,
      email,
      phoneNumber,
      queryType,
      question,
      selectedFiles,
    };
    AdminAction.createQuestion(dataToSend, (err, res) => {
      if (err) {
        alert(err.message);
      } else {
        console.log("fkdshfkhskhfkhfkhkf", res);
      }
    });
  };

  return (
    <>
      <section id="query" class="query-section">
        <div class="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              color: "#8b4513",
              fontSize: "2.5rem",
            }}
          >
            Submit Your Query
          </h2>
          <div class="query-form">
            <div class="success-message" id="successMessage">
              Thank you! Your query has been submitted successfully. We'll get
              back to you within 24 hours.
            </div>

            <input type="hidden" name="form-name" value="vastu-consultation" />
            <div style={{ display: "none" }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            <div class="form-group">
              <label for="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="queryType">Type of Consultation *</label>
              <select
                id="queryType"
                name="consultation-type"
                value={queryType}
                onChange={(e) => {
                  setQueryType(e.target.value);
                }}
                required
              >
                <option value="">Select consultation type</option>
                <option value="vastu">Vastu Issue</option>
                <option value="astrology">Astrology Query</option>
                <option value="both">Both Vastu & Astrology</option>
              </select>
            </div>

            <div class="form-group">
              <label for="query">Your Question/Concern *</label>
              <textarea
                id="query"
                name="message"
                rows="5"
                placeholder="Please describe your question or concern in detail..."
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                required
              ></textarea>
            </div>

            <div class="form-group">
              <label for="fileUpload">
                Upload Floor Plan/Photos (Optional)
              </label>
              <div class="file-upload">
                <input
                  type="file"
                  id="fileUpload"
                  name="attachments"
                  accept=".pdf,.jpg,.jpeg,.png,.gif"
                  onChange={handleFileChange}
                  multiple
                />
                <label for="fileUpload" class="file-upload-label">
                  <i
                    data-lucide="upload"
                    style={{ display: "inline-block", marginRight: "0.5rem" }}
                  ></i>
                  Click to upload files or drag and drop
                  <br />
                  <small>
                    Supported formats: PDF, JPG, PNG (Max 10MB each)
                  </small>
                </label>
              </div>
              {selectedFiles.length > 0 && (
                <ul style={{ marginTop: "1rem" }}>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button type="submit" class="submit-btn" onClick={submitData}>
              <i
                data-lucide="send"
                style={{ display: "inline-block", marginRight: "0.5rem" }}
              ></i>
              Submit Query
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Queries;
