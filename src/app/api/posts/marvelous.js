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
            title: "Splash 이미지",
            url: "/images/works/Marvelous/Marvelous_Thumbnail.png",
            alt: "Splash"
        },
        {
            index: 2,
            title: "플레이 이미지",
            url: "/images/works/Marvelous/Marvelous_001_PlayMain.png",
            alt: "PlayImg"
        },
        {
            index: 3,
            title: "메인 복도",
            url: "/images/works/Marvelous/Marvelous_002_MainWay.png",
            alt: "MainWay"
        },
        {
            index: 4,
            title: "적 (Enemy)",
            url: "/images/works/Marvelous/Marvelous_003_Enemy.png",
            alt: "Enemy"
        },
        {
            index: 5,
            title: "미로 01",
            url: "/images/works/Marvelous/Marvelous_004_Maze01.png",
            alt: "Maze01"
        },
        {
            index: 6,
            title: "미로 02",
            url: "/images/works/Marvelous/Marvelous_005_Maze02.png",
            alt: "Maze02"
        },
        {
            index: 7,
            title: "게임 디자인",
            url: "/images/works/Marvelous/Marvelous_006_GameDesign.png",
            alt: "Game Design"
        },
        {
            index: 8,
            title: "아이템 아웃라인 (Post Process Material)",
            url: "/images/works/Marvelous/Marvelous_007_OutlinePP.png",
            alt: "Outline"
        },
        {
            index: 9,
            title: "UI 블루프린트 (UMG Widget Blueprint)",
            url: "/images/works/Marvelous/Marvelous_008_UI.png",
            alt: "UI"
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
                    게임의 컨셉과 장르부터 세계관 설정 및 게임 시스템, 레벨 디자인 등의 기획을 진행했습니다.
                    {/* <img className="inn" src="/images/works/Marvelous/Marvelous_Thumbnail.png" /> */}
                </li>
                <li><strong>레벨 디자인 (룩뎁/라이팅)</strong><br />
                    플레이 타임을 짧게 기획했기에, 전체적인 레벨의 크기를 작게 제작했습니다. <br />
                    공포스러운 분위기 연출에 중점을 두고 작업했으며, 손전등이 필요하도록 전체 분위기를 매우 어둡게 제작하고 랜덤한 타이밍에 전등이 깜박이도록 제작했습니다.  <br />
                </li>
                <li><strong>아이템 아웃라인</strong><br />
                    플레이어가 상호작용 가능한 오브젝트는 플레이어의 시선을 유도할 수 있도록, Post Process Material을 이용하여 해당 오브젝트를 바라볼 때 액터 아웃라인이 보이도록 작업했습니다. <br />
                </li>
                <li><strong>컷신 (시네마틱)</strong><br />
                    게임의 인트로와 중간부분, 엔딩부분 모두 인게임에서 실행되는 컷신입니다. <br />
                    컷신 애니메이션을 통해 플레이어의 다음 행동을 유도할 수 있도록 작업했습니다. <br />
                    해당 컷신이 등장할 때는 UI가 사라지도록 조절하여 장면에 집중할 수 있도록했습니다.
                </li>
                <li><strong>UI</strong><br />
                    UI가 복잡해지면 어두운 배경 속에 더 안보일 가능성이 있기에 너무 복잡하지 않은 간단한 디자인으로 UI를 작업했습니다. <br />
                    UI의 기본 이미지는 포토샵에서 작업한 후, UMG에서 텍스트 및 위치를 조절하여 사용했습니다. <br />
                    <code>UI Manager</code> 블루프린트를 통해 전체 UI를 하나의 클래스로 동작할 수 있도록 구성했으며, 각 블루프린트 클래스 액터와 통신하며 액터의 Public 변수를 UI 텍스트에 사용하여 수정이 용이하게 작업했습니다.
                </li>
                <li><strong>블루프린트 프로그래밍</strong><br />
                    플레이어 캐릭터의 경우, 언리얼엔진 기본 <code>FirstPersonCharacter</code> 블루프린트를 수정하여 사용했으며, 손전등 및 적 충돌 콜리전 등 기능을 추가했습니다. <br />
                    각 구간별, 혹은 특정 상황별로 이벤트를 통해 컷신 플레이와 같은 상호작용이 가능하도록 작업했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                처음으로 언리얼엔진을 활용해 제작해본 게임입니다. <br />
                비록 완성도도 많이 떨어지고, 게임디자인이 완벽하지 않아 플레이에 있어서 아쉬운 부분도 많이 남아있습니다. <br />
                그래도 게임을 혼자 제작해보면서 각 파트별로 어떤 식으로 작업이 진행되어 가는지, 어떤 부분이 필요한지 이해할 수 있는 작업이었습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 4.26</strong><br />
                    레벨 디자인 및 블루프린트 프로그래밍 등 대부분의 작업을 진행했습니다.
                </li>
                <li><strong>Maya</strong><br />
                    적대몬스터(목각인형) 모델링을 진행했습니다.
                </li>
                <li><strong>Adobe Photoshop</strong><br />
                    UI 디자인을 진행했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;