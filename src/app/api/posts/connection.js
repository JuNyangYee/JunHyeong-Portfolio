const Page = {
    info: {
        title: "因緣 (인연)",
        date: "2024. 04 ~ 2024. 06\n· 서울예술대학교 2024 디지털아트 페스티벌 전시",
        about: "언리얼엔진과 키넥트를 이용한 인터렉티브 미디어아트 작업을 진행했습니다.",
        thumbnail: "/images/works/Connection/Connection_Thumbnail.png",
        tags: ["Unreal Engine", "TouchDesigner", "Kinect", "Tech Art"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: true,
        fab_video_url: "https://www.youtube.com/watch?v=zSd9pJGb9RQ",
        fab_link: false,
        fab_link_url: "",
    },

    imgData: [
        {
            index: 1,
            title: "테라리움 디테일샷 01",
            url: "/images/works/Connection/Connection_001_Detail_01.png",
            alt: "DetailShot_01"
        },
        {
            index: 2,
            title: "테라리움 디테일샷 02",
            url: "/images/works/Connection/Connection_002_Detail_02.png",
            alt: "DetailShot_02"
        },
        {
            index: 3,
            title: "테라리움 디테일샷 03",
            url: "/images/works/Connection/Connection_003_Detail_03.png",
            alt: "DetailShot_03"
        },
        {
            index: 4,
            title: "전시 포스터",
            url: "/images/works/Connection/Connection_004_Poster.png",
            alt: "Poster"
        },
        {
            index: 5,
            title: "전시 엽서",
            url: "/images/works/Connection/Connection_005_Postcard.png",
            alt: "Postcard"
        },
        {
            index: 6,
            title: "NDisplay 구도 레벨 01 (테라리움)",
            url: "/images/works/Connection/Connection_006_Level01.png",
            alt: "Level01"
        },
        {
            index: 7,
            title: "NDisplay 구도 레벨 02 (숲)",
            url: "/images/works/Connection/Connection_007_Level02.png",
            alt: "Level02"
        },
        {
            index: 8,
            title: "NDisplay 구도 레벨 03 (나무)",
            url: "/images/works/Connection/Connection_008_Level03.png",
            alt: "Level03"
        },
        {
            index: 9,
            title: "TouchDesigner 세부 사항",
            url: "/images/works/Connection/Connection_009_TouchDesigner.png",
            alt: "TouchDesigner"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                언리얼엔진을 기반으로 키넥트 센서를 이용한 인터렉티브 미디어아트 작업입니다. <br />
                관객이 유리를 닦는 움직임을 통해 대형 스크린 너머의 조그마한 자연의 모습을 볼 수 있는 작품입니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>
                유리 내부를 테라리움 컨셉으로 제작을 진행했습니다.<br />
                다양한 나무와 풀, 돌 등 디테일한 자연물 에셋 사용을 위해 메가스캔 데이터를 사용했습니다. <br />
                관객 움직임 데이터는 Kinect Azure를 이용하였으며, 해당 값을 TouchDesigner에서 이용해 알파 텍스쳐로 제작 후 언리얼과 연동을 진행했습니다.
            </p>

            <ul>
                <li><strong>레벨 디자인</strong><br />
                    테라리움, 숲 등 유리 너머에 보이는 레벨 디자인을 진행했습니다. <br />
                    관객이 중앙을 중심으로 작품을 체험하는만큼, 시선을 중앙으로 집중할 수 있도록 배치했습니다. <br />
                    각 레벨별로 에셋들이 어색하지 않게 어울릴 수 있도록 최대한 비슷한 텍스쳐의 에셋을 사용했습니다.
                </li>
                <li><strong>TouchDesigner + Kinect</strong><br />
                    Kinect 센서의 값을 바로 언리얼로 연동하기에는 제대로된 플러그인이 없었습니다. 물론 SDK를 직접 사용할 수 있겠지만, 단순 텍스쳐 연동에 SDK까지 작업하기에는 효율이 떨어진다고 판단했습니다 <br />
                    다행히, 터치디자이너에서 TouchEngine 이라는 언리얼엔진 전용 공식 플러그인을 지원하고 있어, 해당 플러그인을 사용해 언리얼엔진과 연동할 수 있었습니다.
                    <ol>
                        <li><strong>관객 수 컨트롤</strong><br />
                            1인 관람이 아닌 만큼 다양한 사람들이 동시에 인식될 수 있습니다. <br />
                            터치디자이너 키넥트 노드의 경우, 여러명이 인식될 경우 처음 인식된 사람부터 0 ~ 숫자로 태깅이 됩니다.<br />
                            다만 중간에 사람이 빠지면 기존 사람이 자동으로 아래 숫자로 내려오지 않고 그대로 유지되면서, 새로운 사람이 인식되면 비어있는 숫자로 할당됩니다. 그렇게 되면서 사람이 인식되었다 풀리는 과정에서 계속해서 튀는 문제가 발생합니다.<br />
                            0번 사람을 기준으로 작업하기 위해, 자동으로 태깅 숫자를 계산하도록 작업하여 관객 인식 안정성을 높였습니다.
                        </li>
                        <li><strong>오른손 트래킹</strong><br />
                            터치디자이너에서 기본적으로 키넥트 노드를 지원하기에, 해당 노드로 키넥트 센서 값을 입력 받았습니다. <br />
                            관객 전신을 트래킹하기에는 값이 몸통 부분의 값이 쉽게 튈 수 있기에 안정적이게 컨트롤 할 수 있는 오른손만 트래킹하였습니다.
                        </li>
                        <li><strong>알파 텍스쳐</strong><br />
                            트래킹된 값을 바탕으로 흑백 알파 텍스쳐를 제작했습니다. 몸통 부분은 단순 도형으로 표현하였으며, 약 0.5 정도의 값으로 설정해 오른손으로 닦는 것이 더 잘 보일 수 있도록 했습니다. <br />
                            마스킹 경계 부분이 단순 블러로는 표현에 어색한 부분이 많아, 자연스럽게 일렁거리게 제작해 유리에 김이 서린 느낌을 조금 더 잘 표현할 수 있도록 했습니다.
                        </li>
                    </ol>
                </li>
                <li><strong>머티리얼</strong><br />
                    김이 서린 부분은 느낌을 살리기 위해, 물방울 텍스쳐들을 조합해 자연스럽게 물방울이 맺혀 흐르는 느낌을 나타냈습니다. <br />
                    TouchEngine 플러그인을 이용해 알파 텍스쳐 값을 실시간으로 입력받았으며, 해당 알파 텍스쳐를 바탕으로 투명 유리와 김서린 유리 머티리얼을 블랜드해서 사용했습니다.
                </li>
                <li><strong>NDisplay</strong><br />
                    처음 구상에선 단순 카메라 화각 조절만으로 표현이 가능할까 싶었지만, 대형 스크린에 투사되는만큼 단순 화각 조절로는 사실적으로 보이지 않았습니다. NDisplay를 이용해 실제 스크린과 관객의 시점 왜곡을 간편하게 작업할 수 있었습니다. 남녀관객의 평균적인 눈높이를 위해 약 170cm 정도의 높이로 설정했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                대형 스크린을 사용하게되면서 테스트를 자주 할 수 없는 상황이었습니다. <br />
                시점의 경우 NDisplay로 어느 정도 해결했지만, 키넥트 값 보정의 경우 현장에서 빠르게 해결해야했습니다. <br />
                터치디자이너 내에서 미리 변경이 필요할 값들을 계산해두고, 현장에서 슬라이더 값 조절을 통해 빠르게 세팅할 수 있게 제작하여, 현장에서 디테일한 조절에 필요한 시간을 줄일 수 있었습니다. 
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 5.4</strong><br />
                    전체적인 레벨 디자인, 쉐이더 작업, 시스템 구성등을 언리얼엔진을 이용해 작업했습니다.
                </li>
                <li><strong>TouchDesigner</strong><br />
                    Azure Kinect 연결 및 트래킹 관련 작업과 알파 텍스쳐 제작을 진행했습니다.
                </li>
                <li><strong>NDisplay</strong><br />
                    대형 스크린과 관객 눈높이 사이 시점 보정을 위해 NDisplay를 사용했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;