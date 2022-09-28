import React from "react";

function FooterMypage() {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-profile mb-md-0">
          ©<script>document.write(new Date().getFullYear());</script>, made with
          ❤️ by
          <a
            href="https://www.miricanvas.com/v/11etw7i"
            target="_blank"
            className="footer-link fw-bolder"
          >
            Passionable
          </a>
        </div>
        <div>
          <a
            href="https://www.notion.so/68a378cce1f94879b63014e7ef60fe8f"
            className="footer-link me-3"
            target="_blank"
          >
            Notion
          </a>
          <a
            href="https://github.com/eleeje97/seeot-client"
            target="_blank"
            className="footer-link me-4"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
export default FooterMypage;
