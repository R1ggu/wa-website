export function ProCheckout() {
  return `
    <section class="content-section pro-checkout-section" id="pro">
      <div class="section-head">
        <p class="section-kicker">Test-Abo</p>
        <h2>Pro-Abo für 99.90 $ pro Jahr.</h2>
        <p>
          Dieser Checkout ist nur ein temporärer Test. Es wird keine echte Zahlung
          ausgelöst; nach vollständig ausgefülltem Formular wird Pro lokal aktiviert.
        </p>
      </div>
      <form class="pro-checkout-form" data-pro-checkout>
        <div class="pro-price-panel">
          <span>HardwareWissen Pro</span>
          <strong>99.90 $</strong>
          <small>jährliches Abo · Testmodus</small>
        </div>
        <label>
          Name
          <input name="name" autocomplete="name" required />
        </label>
        <label>
          E-Mail
          <input name="email" autocomplete="email" required type="email" />
        </label>
        <label>
          Name auf der Karte
          <input name="cardName" autocomplete="cc-name" required />
        </label>
        <label>
          Kartennummer
          <input inputmode="numeric" maxlength="19" minlength="12" name="cardNumber" placeholder="4242 4242 4242 4242" required />
        </label>
        <div class="payment-row">
          <label>
            Ablaufdatum
            <input name="expiry" placeholder="MM/JJ" required />
          </label>
          <label>
            CVC
            <input inputmode="numeric" maxlength="4" minlength="3" name="cvc" required />
          </label>
        </div>
        <label>
          Land
          <input name="country" autocomplete="country-name" required />
        </label>
        <label class="checkbox-line">
          <input name="acceptTerms" required type="checkbox" />
          <span>Ich möchte das Pro-Abo testweise für 99.90 $ pro Jahr abschließen.</span>
        </label>
        <button class="button primary" type="submit">Pro-Abo testen</button>
        <p class="pro-status" data-pro-status></p>
      </form>
    </section>
  `;
}

export function initProCheckout() {
  const form = document.querySelector("[data-pro-checkout]");
  const status = document.querySelector("[data-pro-status]");

  if (!form || !status) {
    return;
  }

  const saved = localStorage.getItem("hardwarewissen-pro");
  if (saved) {
    status.textContent = "Pro-Abo ist in diesem Browser bereits testweise aktiv.";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const user = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      isPro: true,
      plan: "yearly",
      price: "99.90 $",
    };

    localStorage.setItem("hardwarewissen-pro", JSON.stringify(user));
    status.textContent = `Pro-Abo testweise aktiviert für ${user.name}.`;
    form.reset();
  });
}
