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
            title: "전시 현장 01",
            url: "/images/works/QR/QR_001_Exhibition01.png",
            alt: "Exhibition01"
        },
        {
            index: 2,
            title: "전시 현장 02",
            url: "/images/works/QR/QR_002_Exhibition02.png",
            alt: "Exhibition02"
        },
        {
            index: 3,
            title: "QR 인식",
            url: "/images/works/QR/QR_003_Detect.png",
            alt: "QR_Detect"
        },
        {
            index: 4,
            title: "이미지 노드 생성 코드",
            url: "/images/works/QR/QR_004_Generate.png",
            alt: "GenerateCode"
        },
        {
            index: 5,
            title: "이미지 컨트롤 관련 파트",
            url: "/images/works/QR/QR_005_ControlItems.png",
            alt: "ControlItems"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                2D 픽셀아트 기반으로 제작된 이미지가 QR 인식을 통해 생성되어 돌아다니게 제작한 작품입니다. <br />
                터치디자이너를 사용하여 작업했습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>QR 인식 시스템 및 이미지 생성 등 터치디자이너 관련 작업을 진행했습니다.</p>

            <ul>
                <li><strong>QR 인식</strong><br />
                    <code>pyzbar</code> 라이브러리 기반으로 QR 인식 시스템을 제작했습니다.<br />
                    인식된 QR과 데이터 테이블에 있는 QR의 데이터가 일치할 경우 노드 생성을 진행하도록 코딩을 진행했습니다. <br />
                    같은 QR 코드의 중복 인식을 방지하기 위해, 인식 시간에 딜레이를 주어 관리했습니다.
                </li>
                <li><strong>노드 생성 및 제거</strong><br />
                    노드 생성 단계에서, 노드의 이름이 꼬이지 않도록 랜덤 인덱스를 노드 이름에 부여했습니다. <br />
                    크기, 속도, 방향 등 모든 값은 랜덤하게 생성했으며, 관련 값은 <code>constant</code> 노드에서 관리하도록 제작했습니다. <br />
                    각 이미지의 위치가 화면 밖으로 넘어가게 되면 삭제되도록 마무리했습니다.
                </li>
            </ul>

            <h4>추가 작업</h4>
            <ul>
                <li><strong>전시 셋업 및 최적화</strong><br />
                    전시장소 구조 상 큰 프로젝터 사용이 힘들어, 단초점 프로젝터 3개를 활용하여 간단하게 3면 매핑을 진행했습니다. <br />
                    전시 진행 시스템이 노트북 한 대 였기에, 프레임드랍을 최대한 줄이기 위해 해상도를 조금 줄이고 QR 인식 타이밍도 느리게 변경했습니다.
                </li>
                <li><strong>원격 관리 환경</strong><br />
                    약 일주일 간의 전시에 계속 상주해있기는 불가능 해, 여분의 웹캠을 두어 전시 현장을 지속적으로 확인할 수 있도록 했습니다. <br />
                    추가로 오류가 발생하거나 수정이 필요할 경우, 파섹을 활용해 원격으로 제어할 수 있도록 관리했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                처음으로 진행한 터치디자이너 프로젝트입니다. 터치디자이너 툴에 익숙하지 않기도 하고, 노드도 어떻게 활용할지 잘 몰라서 헤메긴 했지만, 대부분을 코딩으로 진행하게 되어서 조금은 편하게 작업할 수 있었던 것 같습니다. <br />
                파이썬도 처음 사용해봤습니다. 코딩을 하면서도 대괄호나 세미콜론이 없는 게 많이 어색하긴 했지만, 다른 언어랑 구조 상 크게 차이가 나지 않아서 인지 헤메지 않고 잘 마무리 한 것 같습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>TouchDesigner</strong><br />
                    터치디자이너를 활용하여 Python 코딩을 기반으로 작업했습니다. <br />
                    프로젝션의 경우, 터치디자이너에서 지원하는 <code>kantanmapper</code>를 활용했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;