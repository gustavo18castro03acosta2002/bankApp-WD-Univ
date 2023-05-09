import Link from "next/link";

export function HomePage() {
    return (
        <section className="SectionHomeSetting">
            {/* INFO BOX */}
            <div className="HomePageInfoBoxSetting">
                {/* TITLE */}
                <div className="HomePageTitleSetting">
                    <h1 className="Title">Hello</h1>
                </div>
                {/* SUBTITLE */}
                <div className="HomePageSubTitleSetting">
                    <h3 className="SubTitle">Hell</h3>
                </div>
                {/* BTNS */}
                <div className="HomePageBtnSetting">
                    <Link href="/registrate">
                        <button>abrir una cuenta</button>
                    </Link>
                </div>
                {/* DESCRIPTION */}
                <div className="HomePageDescriptionSetting">
                    <p className="Description">
                        Some DEscription.
                    </p>
                </div>
            </div>
        </section>
    );
}