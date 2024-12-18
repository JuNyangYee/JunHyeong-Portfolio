const Page = {
    info: {
        title: "TouchDesigner QR 인식 컨텐츠 개발",
        date: "2024. 04\n· 2024-1 홍익대학교 대학원 조소 · 판화과 석사학위청구전 전시",
        about: "터치디자이너를 활용하여 QR 인식 활용 컨텐츠를 개발하였습니다.",
        thumbnail: "/images/works/QR/QR_Thumbnail.png",
        tags: ["TouchDesigner", "Tech", "Dev"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: false,
        fab_video_url: "",
        fab_link: false,
        fab_link_url: "",
    },

    imgData: [
        {
            index: 1,
            title: "작품 Splash 이미지",
            url: "/images/works/QR/QR_Thumbnail.png",
            alt: "Splash"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                기존 PC 플레이 버전으로 제작된 컨텐츠를 VR로 체험할 수 있도록 포팅 및 추가 수정을 진행한 작업입니다.<br />
                해당 작업은 Kiaf SEOUL 2024 - Kiaf onSITE 에서 전시하였습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>VR 기반 전체적인 시스템 수정과, 최적화 작업을 진행했습니다.</p>

            <ul>
                <li><strong>블루프린트 최적화</strong><br />
                    기존 작업자가 작업한 내용들을 정리하면서 지저분한 블루프린트 클래스도 새롭게 제작하여 관리하였습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                다른 사람이 진행하던 프로젝트를 어떤 가이드도 없이 하나하나 확인하면서 작업을 시작했습니다. <br />
                전체적으로 정리가 잘 되어있지 않고, 한글-영문 혼용이 되면서 예상치못한 오류가 발생하는 부분도 있었습니다.<br />
                정해진 가이드나 메뉴얼이 있어야 작업의 유지 · 보수가 원활하게 진행될 수 있겠다고 느꼈던 작업이었습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>TouchDesigner</strong><br />
                    전체 시스템은 블루프린트 기반으로 작업되었습니다. 
                </li>
            </ul>
        </div>
    )
}

export default Page;