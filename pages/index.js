// pages/index.js
import Property from "../components/Property";

export default function Index() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-half has-text-centered">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
            <h1 className="title">Samko</h1>
            <p className="subtitle">Lorem Ipsum Dolor tralaland</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Property title="Život" icon="hearth" />
            <Property title="Energia" icon="chicken" />
          </div>
        </div>
      </div>
    </section>
  );
}
