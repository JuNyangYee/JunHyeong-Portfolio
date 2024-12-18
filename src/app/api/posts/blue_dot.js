const Page = {
    info: {
        title: "The Earth: Pale Blue Dot",
        date: "2023. 11",
        about: "언리얼엔진을 이용한 시네마틱 영상을 제작했습니다.",
        thumbnail: "/images/works/BlueDot/BlueDot_Thumbnail.png",
        tags: ["Unreal Engine", "3D Graphics", "Cinemtaic"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: true,
        fab_video_url: "https://youtu.be/9DiaCtCa9OE?si=O7GR7s5gvCQkx5C8",
        fab_link: false,
        fab_link_url: "",
    },

    imgData: [
        {
            index: 1,
            title: "썸네일",
            url: "/images/works/BlueDot/BlueDot_Thumbnail.png",
            alt: "Thumbnail"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                <strong>창백한 푸른 점</strong>이라는 주제로 언리얼엔진을 활용하여 제작한 간단한 3D 시네마틱 영상입니다.<br />
                언리얼엔진과 엔진에서 제공하는 메가스캔 에셋들을 기반으로 제작했습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>
                전체적인 씬 구상 및 레벨 디자인, 시네마틱 작업을 진행했습니다.
            </p>
            <ul>
                <li><strong>영상 기획</strong><br />
                    우리는 <strong>우주의 작은 점</strong> 이면서 <strong>우주의 가장 완벽한 행성</strong> 이라는 느낌을 주고 싶었습니다.<br />
                    DNA처럼 미시세계부터 자연, 그리고 도시의 모습을 비추며 세상이 발전해가는 모습을 조금씩 화면에 담았습니다.
                </li>
                <li><strong>지구 제작</strong><br />
                    지구의 모습을 사실적으로 표현하기 위해, NASA에서 제공되는 지구의 텍스쳐와 함께 <br />
                    행성 위로 구름, 대기층, 야간의 모습까지 최대한 구현하고, 텍스쳐 패닝등을 활용하여 지구를 최대한 사실적으로 표현했습니다.<br />
                    추가로 달도 제작하여, 지구 주변을 공전하는 달의 모습도 함께 담았습니다.
                </li>
                <li><strong>시네마틱 카메라</strong><br />
                    실제 카메라의 렌즈처럼 세팅하여 DOF와 모션블러 등 현실감 있게 촬영한 것 처럼 표현하고자 했습니다.
                </li>
                <li><strong>나이아가라 이펙트</strong><br />
                    나이아가라를 활용하여, DNA 메쉬와 함게 미시세계에서의 DNA 모습을 담았습니다.
                </li>
            </ul>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 5.3</strong><br />
                    레벨디자인 및 시네마틱 작업을 진행했습니다. 
                </li>
                <li><strong>Quixel Megascan</strong><br />
                    씬에 사용된 대부분의 에셋들은 메가스캔을 사용했습니다.
                </li>
                <li><strong>Adobe After Effect</strong><br />
                    영상의 컷 편집, 자막, 색보정 등 후반 작업을 진행했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;