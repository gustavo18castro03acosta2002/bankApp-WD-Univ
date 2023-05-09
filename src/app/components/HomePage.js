import Link from "next/link";

export function HomePage() {
  return (
    <section className="SectionHomeSetting">
      {/* INFO BOX */}
      <div className="HomePageInfoBoxSetting">
        {/* TITLE */}
        <div className="HomePageTitleSetting">
          <h1 className="Title">&#191;Quieres ser tu propio banco &#63;</h1>
        </div>
        {/* SUBTITLE */}
        <div className="HomePageSubTitleSetting">
          <h3 className="SubTitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias minima laboriosam et beatae qui labore deserunt, ipsa inventore repellat dolorum. 
          </h3>
        </div>
        {/* BTNS */}
        <div className="HomePageBtnSetting">
          <Link href="/registrate">
            <button className="GeneralBtnSettings BtnMain BtnOpenAccount">abrir una cuenta</button>
          </Link>
        </div>
        {/* DESCRIPTION */}
        <div className="HomePageDescriptionSetting">
          <p className="Description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eum blanditiis facilis iure quam ipsa ea corporis. Doloribus odio, quasi totam aliquid accusamus, laborum laudantium nisi tempora accusantium temporibus corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi qui natus provident dolor, commodi magni? Cumque, eum? Vel id amet vitae consequatur iusto odio sapiente ipsum qui repellat magni?</p>
        </div>
      </div>
    </section>
  );
}
