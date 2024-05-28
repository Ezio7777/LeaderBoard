import React from "react";
import "../styles/footer.css";

function footer() {
  return (
    <footer class="bg-body-tertiary text-center text-lg-start footer_body">
      <div class="text-center p-3 ">
        <a class="text-body footer_text" href="https://mdbootstrap.com/">
          Made with ❤️ by Sunit Pal
        </a>
        <p className="mt-1 cpr_txt"> © 2024 Copyright</p>
      </div>
    </footer>
  );
}

export default footer;
