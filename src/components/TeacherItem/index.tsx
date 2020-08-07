import React from "react";
import whatsIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://twitter.com/TH_silvva/photo"
          alt="Tiago Alberto"
        />
        <div>
          <strong>Tiago Alberto</strong>
          <span>Lorem</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        ipsam nihil modi.
        <br />
        <br />
        Fugit voluptatem sit eveniet tenetur hic eaque, dolorum nisi reiciendis
        voluptates. Minima atque aliquam accusantium fugit debitis dolor!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 129,00</strong>
        </p>

        <button type="button">
          <img src={whatsIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;