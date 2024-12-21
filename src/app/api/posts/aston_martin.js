const Page = {
    info: {
        title: "Old Aston Martin",
        date: "2023. 11",
        about: "에스턴마틴 차량 텍스쳐링 및 렌더링을 진행하였습니다.",
        thumbnail: "/images/works/AstonMartin/AstonMartin_Thumbnail.png",
        tags: ["3D Graphics", "Substance Painter", "Substance Designer"],
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
            title: "렌더링 01 (Unreal Engine)",
            url: "/images/works/AstonMartin/AstonMartin_001_Render01.png",
            alt: "Render_UE01"
        },
        {
            index: 2,
            title: "렌더링 02 (Unreal Engine)",
            url: "/images/works/AstonMartin/AstonMartin_002_Render02.png",
            alt: "Render_UE02"
        },
        {
            index: 3,
            title: "렌더링 03 (Substance Painter iray)",
            url: "/images/works/AstonMartin/AstonMartin_003_iray01.png",
            alt: "Render_iray01"
        },
        {
            index: 4,
            title: "렌더링 04 (Substance Painter iray)",
            url: "/images/works/AstonMartin/AstonMartin_004_iray02.png",
            alt: "Render_iray02"
        },
        {
            index: 5,
            title: "렌더링 05 (Substance Painter iray)",
            url: "/images/works/AstonMartin/AstonMartin_005_iray03.png",
            alt: "Render_iray03"
        },
        {
            index: 6,
            title: "렌더링 06 (Substance Painter iray)",
            url: "/images/works/AstonMartin/AstonMartin_006_iray04.png",
            alt: "Render_iray04"
        },
        {
            index: 7,
            title: "Substance Painter Works",
            url: "/images/works/AstonMartin/AstonMartin_007_SPP.png",
            alt: "SubstancePainter"
        },
        {
            index: 8,
            title: "Asphalt (Substance Designer)",
            url: "/images/works/AstonMartin/AstonMartin_008_Asphalt_sbs.png",
            alt: "SubstanceDesigner_Asphalt"
        },
        {
            index: 9,
            title: "Asphalt (Unreal Engine)",
            url: "/images/works/AstonMartin/AstonMartin_009_Asphalt.png",
            alt: "Asphalt_UnrealEngine"
        },
        {
            index: 10,
            title: "Mud (Substance Designer)",
            url: "/images/works/AstonMartin/AstonMartin_010_Sand_sbs.png",
            alt: "SubstanceDesigner_Mud"
        },
        {
            index: 11,
            title: "Mud (Unreal Engine)",
            url: "/images/works/AstonMartin/AstonMartin_011_Sand.png",
            alt: "Sand_UnrealEngine"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                애스턴마틴 차량 모델에 Substance Painter를 이용하여 텍스쳐링을 진행했습니다.<br />
                추가로 언리얼 엔진에서 렌더하기 위해 Substance Designer를 활용하여 바닥 텍스쳐를 제작했습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>
                Substance를 활용한 텍스쳐링 및 렌더링을 진행했습니다. <br />
                총 2차에 나누어 작업했으며, <br />
                1차에선 Painter를 활용한 텍스쳐링 및 렌더, 2차에선 Designer 및 언리얼엔진을 활용한 렌더를 진행했습니다.
            </p>

            <ul>
                <li><strong>Maya 메테리얼 분리</strong><br />
                    UV는 펴져있었으나, 메테리얼이 하나로 통일되어있어 분리해주었습니다.<br />
                    페인터에서 원활하게 작업할 수 있도록 진행했습니다.
                </li>
                <li><strong>Substance Painter 텍스쳐링</strong><br />
                    페인터에서 제공하는 텍스쳐 베이킹을 활용해 normal, ao등의 맵들을 베이킹했습니다. <br />
                    Clear Coat 재질 표현을 위해 <code>ASM-PBR Metallic Roughness Coated</code> 모델을 사용했으며,
                    차량의 느낌을 최대한 살리면서 오래된 흔적이 남아있어보이도록 작업하였습니다.<br />
                    차량 유리의 경우 Alpha Shader를 분리하여 <code>PBR-Metal Rough with alpha blending</code> 모델을 사용했습니다.
                </li>
                <li><strong>Substance Designer</strong><br />
                    언리얼엔진에서 렌더링할 때 필요한 바닥 텍스쳐를 제작했습니다.<br />
                    진흙과 아스팔트 두 가지를 제작했습니다.
                </li>
                <li><strong>Unreal Engine 렌더링</strong><br />
                    언리얼엔진에서 간단하게 레벨을 디자인하여 렌더링을 진행했습니다. <br />
                    나무 등 주변환경 에셋은 메가스캔 및 에픽게임즈 에셋을 이용했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                오랜만에 사용하는 페인터 툴이라 약간 헤메다가도 금방 잘 적응할 수 있었던 것 같습니다.<br />
                시간 여유가 있었다면 여러 레퍼런스를 찾아서 녹슨 느낌까지 구현하고 싶었지만, 단순 먼지 · 흙 표현 정도로 마무리된 것 같아 아쉬움이 남습니다.<br />
                추후 녹슨 텍스쳐 제작도 진행해보면 좋을 것 같습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Substance Painter</strong><br />
                    텍스쳐 베이킹 및 차량 텍스쳐링을 진행했습니다.
                </li>

                <li><strong>Substance Designer</strong><br />
                    바닥에 사용할 진흙 및 아스팔트 텍스쳐를 제작했습니다.
                </li>

                <li><strong>Unreal Engine 5.2</strong><br />
                    에셋을 이용한 간단한 레벨 디자인 후 렌더링을 진행했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;