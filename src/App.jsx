import Button from "./components/Button";
import FormInput from "./components/FormInput";
import { handleSubmit } from "./script";

export default function App() {
  return (
    <div className="grid">
      <main className="grid__main">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </main>

      <aside className="grid__form">
        <p className="grid__form__heading">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid__form__container"
          noValidate
        >
          <FormInput
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />

          <FormInput
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />

          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />

          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <Button />

          <p className="grid__form__footnote">
            By clicking the button, you are agreeing to our{" "}
            <strong className="color-primaryRed">Terms and Services</strong>
          </p>
        </form>
      </aside>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/srihari-m-s"
            target="_blank"
          >
            Srihari
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
