import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImgCarousel.css"

export default function ImgCarousel() {
    const settings = {
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 1500,
        centerMode: true,
        slidesToShow: 3,
    }

    return (
        <div className="gallery">
            <Slider {...settings}>
                <>
                    <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/4721e6a0-9835-48e3-8273-aa04d85a3e94/IMG-6365.jpg?format=750w" alt="pic1" />
                    {settings.centerMode === true ? <h3>pink Cake</h3> : <h3></h3>}
                </>
                <>
                    <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/b2f1c849-e9a1-4a2b-9dce-23549b7276be/152836767_267793311418796_7541243213307502785_n.jpg?format=750w" alt="pic2" />
                    {settings.centerMode === true ? <h3>red Cake</h3> : <h3></h3>}
                </>
                <>
                    <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/ecd7370c-4f86-4584-888a-2cfaefc7077f/IMG-6364.jpg?format=750w" alt="pic3" />
                </>
                <>
                    <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/abc0f987-aede-40a2-8fce-f7f0fab9c7e1/IMG-4390.jpg?format=1000w" alt="pic4" />
                </>
                <>

                </>
                <>

                </>
                <>

                </>
                <>

                </>
                <>

                </>
                <>

                </>
                <>

                </>
                <>

                </>
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/f460a397-a641-4eee-a9dd-c54a0393e205/the+dessert+studio-8.jpg?format=1000w" alt="pic5" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/ef884635-b11b-4dcf-a780-058b9f465974/IMG-5289.JPG?format=750w" alt="pic6" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/d8bd75fe-b8cb-4d55-9202-a19b620d8b40/IMG-4395.jpg?format=750w" alt="pic7" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/050d4389-9830-49dc-ae49-eafd03e1573f/96361273_2439424709491407_3943079460971288897_n.jpg?format=1000w" alt="pic8" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/43a3f1cc-d13e-432d-a858-a3ef35df810d/133145961_423091035539003_7577920843952275299_n.jpg?format=1000w" alt="pic9" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/7680863b-5e68-4880-9451-ede00b645c5d/149076890_2835299926743362_5560378726563681777_n.jpg?format=750w" alt="pic10" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/0b02cfd7-102d-45c3-ab8f-a7e3a50d0805/152375094_250036980057877_3318670069647352511_n.jpg?format=1500w" alt="pic11" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/6c86e3b3-005c-4cc3-8dc5-c49edef8d850/IMG-3905.JPG?format=500w" alt="pic12" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/5c6c32f6-391d-4f17-adec-4eec61195023/116642799_3328265540571536_3438267820243836596_n.jpg?format=1000w" alt="pic13" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/7725ef15-9cc8-423f-9216-0f12060141c9/20148.jpg?format=750w" alt="pic14" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/37ce15a1-d37f-44dc-bb64-856fc01f9c35/89093137_548100542467856_8071634255807557876_n.jpg?format=750w" alt="pic15" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/eb0ea5d1-d28b-4ce9-9397-3e2089933249/80111.jpg?format=750w" alt="pic16" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/638a1402-9e4f-4006-9dc3-a13e07b26d68/dessertstudio-59.jpg?format=1500w" alt="pic17" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/6bc292b4-baff-450b-97ec-8a769a069d88/blue+cake.jpg?format=750w" alt="pic18" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/f553b3ed-04e5-4877-9e70-9137ba03cc03/dessert+studio-11_websize.jpg?format=750w" alt="pic19" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/de9a7dd6-5777-4409-86ba-eda15a0d40ba/69133781_2990097754394728_2987797558587835298_n.jpg?format=1500w" alt="pic20" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/b5038c94-79ff-4c8a-9adf-5efa0c2a78b9/dessert+studio-4_websize.jpg?format=750w" alt="pic21" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/dcba5d9b-a42a-4901-87df-db92761c68ae/the+dessert+studio-68.jpg?format=750w" alt="pic22" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/db1476a1-7dd4-45fe-b4c8-0d18a59a0975/IMG-2182.JPG?format=750w" alt="pic23" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/2d7490af-a3cf-4340-b708-5d2dc6569771/_DSC8075.jpg?format=750w" alt="pic24" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/7afd3d0a-b1b8-4e67-b6ed-636ad3313385/121204688_803835046858043_2465363588249057465_n.jpg?format=1000w" alt="pic25" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/e653c734-0129-44e9-9748-b6001e40cfd9/the+dessert+studio-50.jpg?format=750w" alt="pic26" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/fbcdcb87-0ae5-4de1-b286-d124e0032021/6DAA03E5-A158-4418-9BDE-BE52E91C36A5.JPG?format=750w" alt="pic27" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/1631121882060-2PWK8N5M1D5BBMFUSAQG/IMG-9621.jpg?format=1000w" alt="pic28" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/458a33c0-07a2-4e2d-bf61-7c4726d48b86/75FA91EA-8CB5-434D-8E0B-DDAE22B56F60.jpg?format=750w" alt="pic29" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/38736933-87fe-4707-933a-2d5e85c5f7f6/6DF2D9FB-B072-49DB-9066-E6B889E54BBC.JPG?format=500w" alt="pic30" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/d7a22084-4b62-4823-8ec1-35defa449634/_DSC8012.jpg?format=1500w" alt="pic31" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/c10c8618-cef8-4aa1-a6e5-2e7c612d5ab7/9E9433E2-E9AE-4356-A581-DB1825715044.JPG?format=500w" alt="pic32" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/35b84e73-8b77-44c4-8544-be06082897b1/IMG-6974.JPG?format=750w" alt="pic33" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/78e2338c-0c1b-42e4-a8de-1001dc80e086/IMG-6112.jpg?format=750w" alt="pic34" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/f88845f3-2610-4e1d-9eaa-441e70bf2068/IMG-6681.JPG?format=750w" alt="pic35" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/7dd0d10d-48a4-4292-90d9-b78cd694c1a0/_DSC8021.jpg?format=750w" alt="pic36" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/20ef72f9-9e9f-4dc0-8a27-9478ba5d1a5d/COOKIE+CAPTURE.JPG?format=750w" alt="pic37" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/98204647-f827-4545-ac58-073a9e5686b9/IMG_5755.jpg?format=750w" alt="pic38" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/a959f27f-b34b-456a-8a4c-23c7f1264b95/IMG_5750.jpg?format=750w" alt="pic39" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/33242426-17ea-4966-baeb-bf77a1ee743b/71238121_718583918661286_7335261858387036780_n.jpg?format=750w" alt="pic40" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/2f54c314-a49e-4c86-af80-d6760a40fd30/the+dessert+studio-61.jpg?format=750w" alt="pic41" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/707ab162-a098-4010-b29f-302f30a60031/the+dessert+studio-10+%281%29.jpg?format=750w" alt="pic42" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/9595e509-9f28-435b-80ed-4d7d0578bd29/the+dessert+studio-16.jpg?format=750w" alt="pic43" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/ca12ba1d-c331-49b9-a95e-e88c7aa2c6e5/the+dessert+studio-42.jpg?format=750w" alt="pic44" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/c783e61f-2657-4d1e-9bf3-ea0138cbf0f8/475DEA43-E6C5-47A6-9ED3-9942C7783B5B.JPG?format=750w" alt="pic45" />
                <img src="https://images.squarespace-cdn.com/content/v1/6130541c25007576b43eb649/ba0a4586-d7d3-43ec-8c12-165822e26bc4/the+dessert+studio-29.jpg?format=750w" alt="pic46" />


            </Slider>
        </div>

    );
}