const Page = {
    info: {
        title: "The Marvelous",
        date: "2020. 12 ~ 2021. 02\n· CultureHub Re-Fest 2021 배포",
        about: "언리얼엔진으로 제작한 1인 개발 1인칭 탈출 PC 게임입니다.",
        thumbnail: "/images/works/Marvelous/Marvelous_Thumbnail.png",
        tags: ["Unreal Engine", "Game", "One-Person Dev"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: true,
        fab_video_url: "https://youtu.be/kFFT5EtFT9c?si=GM-P2JCV2FQ976JB",
        fab_link: true,
        fab_link_url: "https://www.culturehub.org/seoularts-games",
    },

    imgData: [
        {
            index: 1,
            title: "작품 Splash 이미지",
            url: "/images/works/Marvelous/Marvelous_Thumbnail.png",
            alt: "Splash"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                언리얼엔진으로 제작한 1인 개발 1인칭 탈출 PC 게임입니다.<br />
                게임 디자인부터 아트, 테크 모두 혼자 작업했습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>게임의 기획부터 완성까지 모두 작업했습니다.</p>

            <ul>
                <li><strong>게임 디자인</strong><br />
                    게임의 스토리부터 진행 과정을 제작했습니다.
                    {/* <img className="inn" src="/images/works/Marvelous/Marvelous_Thumbnail.png" /> */}
                </li>
                <li><strong>레벨 디자인 (룩뎁/라이팅)</strong><br />
                    플레이 타임을 짧게 기획했기에, 전체적인 레벨의 크기를 작게 제작했습니다. <br />
                    공포스러운 분위기가 나야했기에 손전등이 필요하도록 전체 분위기를 매우 어둡게 제작하고, 랜덤한 타이밍에 전등이 깜박이도록 제작했습니다.  <br />
                </li>
                <li><strong>아이템 아웃라인</strong><br />
                    플레이어가 상호작용 가능한 오브젝트는 어두울 때도 볼 수 있도록, 해당 오브젝트를 바라볼 때 액터 아웃라인이 보이도록 작업했습니다. <br />
                </li>
                <li><strong>컷신 (시네마틱)</strong><br />
                    게임의 인트로와 중간부분, 엔딩부분 모두 인게임에서 실행되는 컷신입니다. <br />
                    해당 컷신이 등장할 때는 UI가 사라지도록 조절하여 장면에 집중할 수 있도록했습니다.
                </li>
                <li><strong>UI</strong><br />
                    UI가 복잡해지면 어두운 배경 속에 더 안보일 가능성이 있기에 너무 복잡하지 않은 간단한 디자인으로 UI를 작업했습니다. <br />
                    UI의 기본 이미지는 포토샵에서 작업한 후, UMG에서 텍스트 및 위치를 조절하여 사용했습니다.
                </li>
                <li><strong>블루프린트 프로그래밍</strong><br />
                    UI가 복잡해지면 어두운 배경 속에 더 안보일 가능성이 있기에 너무 복잡하지 않은 간단한 디자인으로 UI를 작업했습니다. <br />
                    UI의 기본 이미지는 포토샵에서 작업한 후, UMG에서 텍스트 및 위치를 조절하여 사용했습니다.
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
                <li><strong>Unreal Engine 4.23</strong><br />
                    전체 시스템은 블루프린트 기반으로 작업되었습니다. 
                </li>
            </ul>
        </div>
    )
}

export default Page;