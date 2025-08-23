function queries() {
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

            <form
              name="vastu-consultation"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              id="queryForm"
            >
              <input
                type="hidden"
                name="form-name"
                value="vastu-consultation"
              />
              <div style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </div>

              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div class="form-group">
                <label for="queryType">Type of Consultation *</label>
                <select id="queryType" name="consultation-type" required>
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
              </div>

              <button type="submit" class="submit-btn">
                <i
                  data-lucide="send"
                  style={{ display: "inline-block", marginRight: "0.5rem" }}
                ></i>
                Submit Query
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default queries;
