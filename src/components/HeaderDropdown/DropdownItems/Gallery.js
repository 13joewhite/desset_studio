import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../ImgCarousel.css"

export default function ImgCarousel() {
    const settings = {
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        slidesToShow: 3,
    }

    return (
        <div className="gallery">
            <Slider {...settings}>
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/310964cc-5704-45a8-9391-4c36d33d9e3d/72690533_1716107665188871_6581729202616611823_n.jpg?format=1500w" alt="pic1" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/8e117752-4c17-462a-9904-dc71b5d7eec0/dessert+studio-11_websize.jpg?format=750w" alt="pic2" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/c160a62e-a1f3-4b34-a831-bbe4514ffa8f/blue+cake.jpg?format=750w" alt="pic3" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/d33ac06a-a7a4-4ea7-be81-22cb6968c2ef/IMG_2222.jpg?format=750w" alt="pic4" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/fbcd6cad-de8b-480c-9809-e1065c5e1d0b/dessert+studio-6_websize.jpg?format=750w" alt="pic5" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/62df5032-fd7b-4c04-8a49-f219a0737a81/121204688_803835046858043_2465363588249057465_n.jpg?format=1500w" alt="pic6" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/f7f0057b-bf98-4298-b825-2f3aea850dd8/53618415_2147277585366546_7562268379646906163_n.jpg?format=1500w" alt="pic7" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/5c296d05-fe8d-4fc8-a5cd-ce178ced2ac6/IMG_2763-1.jpg?format=750w" alt="pic8" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/0806a932-d8af-4118-9db1-d919668a06b8/50052803_961944687328596_6667418729922866546_n.jpg?format=1500w" alt="pic9" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/6d4740e7-5027-4ed5-a54a-c43de8354a8d/IMG_3707.jpg?format=1000w" alt="pic10" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/1a5e736b-16eb-4aa2-bae8-7fdaf032cd72/valentines-2019-4.jpg?format=750w" alt="pic11" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/69c484cc-9450-41fa-8126-9bf0483d7809/84863346_2567080130241506_5061757788491835037_n.jpg?format=1500w" alt="pic12" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/df805a9c-0532-4ebc-9d81-8baf78bf0451/IMG_5755.jpg?format=750w" alt="pic13" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/fba1fa4d-16cc-4794-9467-5693bea27026/IMG_3714.jpg?format=1000w" alt="pic14" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/60f44cef-653a-4464-93ca-02c303f72120/96361273_2439424709491407_3943079460971288897_n.jpg?format=1500w" alt="pic15" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/6d549f8f-0880-42e4-b15f-afb367adb544/65248919_2387832214773799_6137952716534401069_n.jpg?format=1500w" alt="pic16" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/4aefb812-4085-458e-95b5-559475674da0/50805327_2204230243163374_5392383272553927869_n.jpg?format=1000w" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/4b9fc260-0400-4083-88fb-f44045b59741/IMG_5750.jpg?format=750w" alt="pic18" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/bbae18cd-8e42-4588-8434-e877c7858131/89093137_548100542467856_8071634255807557876_n.jpg?format=1000w" alt="pic19" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/b55d742e-ad6b-4222-b0b3-02d7f81d5d32/IMG_3576.jpg?format=1000w" alt="pic20" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/1055c26e-a116-42c9-9991-ffafacd055e3/67704664_155599395624151_907885406657096437_n.jpg?format=1500w" alt="pic21" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/461e7481-4c8d-48b7-9acb-80f5cc8765f8/58468808_1232666486907268_866985759637373345_n.jpg?format=1500w" alt="pic22" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/67536ab0-bd95-4e55-af16-e3896a572726/70648113_138652674152499_8515214996347746594_n.jpg?format=1000w" alt="pic23" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/a777b941-8a50-4e23-9150-3af590271b5b/65393805_125341002024578_8488156609787826609_n.jpg?format=1500w" alt="pic24" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/dc324689-1ffe-4a50-acbb-0980c9189252/IMG-0603.jpg?format=750w" alt="pic25" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/062fb15a-3562-4d35-98bf-220b92f690fe/79380368_1001019396943182_2701173364894177486_n.jpg?format=1000w" alt="pic26" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/eab4e07d-8ff2-46c6-a078-2f31c6916f43/6DAA03E5-A158-4418-9BDE-BE52E91C36A5.JPG?format=1000w" alt="pic27" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/fffbafac-2f6e-40ae-bf84-f5c04e4b50db/49473734_383467025554711_1984350868171769200_n.jpg?format=1500w" alt="pic28" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/8dd6cc80-b6d3-46a7-8ace-9d54057d86e8/IMG_1985.jpg?format=1000w" alt="pic30" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/ab6c3754-572b-4fb2-afcb-393b1a7f8810/69855434_164756327916868_2784676979162827562_n.jpg?format=1500w" alt="pic31" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/b96dae14-20c8-48d5-8584-e4aafbbfe8ee/475DEA43-E6C5-47A6-9ED3-9942C7783B5B.JPG?format=1000w" alt="pic32" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/e7997424-848d-4254-81bd-d3a0052db636/IMG-1825.jpg?format=1000w" alt="pic33" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/7725ef15-9cc8-423f-9216-0f12060141c9/20148.jpg?format=1000w" alt="pic34" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/0ef442f2-263b-4773-99d6-8a35eb3e2386/152836767_267793311418796_7541243213307502785_n.jpg?format=1000w" alt="pic35" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/a553456e-3a9b-4e20-af81-c2f0e781041e/6DF2D9FB-B072-49DB-9066-E6B889E54BBC.JPG?format=750w" alt="pic36" />
            </Slider>
        </div>
    );
}