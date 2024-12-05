const Page = {
    info: {
        title: "WAY: A NEW MOMENT",
        date: "2021. 04 ~ 2021. 10\n· 서울예술대학교 2021 디지털아트 페스티벌 전시\n· 세운상가 세운홀 전시",
        about: "언리얼엔진4 기반 VR 체험형 콘텐츠 제작에 테크니컬 아티스트로 참여하였습니다.",
        thumbnail: "/images/works/Way/Way_Thumbnail.jpg",
        tags: ["Unreal Engine", "VR", "Tech Art"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: true,
        fab_video_url: "https://www.youtube.com/watch?v=6jvMTYGPeLs",
        fab_link: false,
        fab_link_url: "",
    },

    imgData: [
        {
            index: 1,
            title: "전시 포스터",
            url: "/images/works/Way/Way_Thumbnail.jpg",
            alt: "Main Page"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                <strong>Team. 1llusion</strong>에서 테크니컬 아티스트로 참여해 작업했습니다.<br />
                언리얼엔진을 이용한 VR 인터랙티브 미디어 아트 작품이며, <br />
                한국콘텐츠진흥원 콘텐츠임팩트 프로젝트에 선정되어, 세운상가 세운홀에서 전시를 진행하였습니다.<br />
                PC와 VR 두 가지 버전 모두 대응할 수 있도록 제작하였습니다. 
            </p>

            <hr />

            <h3>주요 작업 내용</h3>
            <ul>
                <li><strong>블루프린트 프로그래밍</strong><br />
                    프로젝트의 전체적인 블루프린트 구조를 구축했습니다. <br />
                    가능한 마스터 블루프린트 클래스에서 대부분의 수치를 관리할 수 있도록 하여, 팀원들이 직접 수치를 조절하기 편리하도록 구성했습니다.
                </li>
                <li><strong>Alembic Cache 컨트롤</strong><br />
                    Houdini에서 생성된 알렘빅 캐시를 플레이하고, 플레이어와 상호작용할 수 있도록 구성했습니다.<br />
                    언리얼엔진 내에서 알렘빅 캐시를 플레이하고 유지될 때 프레임 드랍이 심해져, 알렘빅 캐시 플레이 종료 후 스태틱 메쉬 액터로 변환되도록 설정했습니다.
                </li>
                <li><strong>라이팅</strong><br />
                    크기가 큰 실측 건물 기준의 에셋을 사용하다보니 기존 라이팅 방법으로는 라이트 빌드 오류가 발생하는 문제가 있어, <strong>LPV (Light Propagation Volume)</strong>를 사용하여 빌드없이 실시간 동적 라이팅을 사용했습니다.
                </li>
                <li><strong>UMG UI 디자인</strong><br />
                    PC와 VR 모두 대응할 수 있는 UI를 작업했습니다.<br />
                    VR의 경우 <code>widget</code>과 <code>stereo layer</code>기반의 UI 시스템을 구성했습니다.
                </li>
                <li><strong>최적화</strong><br />
                VR의 경우 프레임 드랍이 생기면 멀미/어지러움이 극대화됩니다. <br />
                전체적으로 프로젝트가 무거운 편이라, 프레임 최적화를 위해 많은 고민과 작업을 진행했습니다.
                    <ol>
                        <li><strong>Material</strong><br />
                            투명/반투명의 재질을 최대한 제거하고 Shader Complexity를 확인하며 메테리얼 단계에서 최적화를 진행했습니다.
                        </li>
                        <li><strong>LOD</strong><br />
                            에셋의 폴리곤 수가 높아 프레임 드랍이 심했습니다.<br />
                            LOD를 생성하고 에셋 퀄리티가 잘 보이도록 거리 조절하며 작업했습니다.
                        </li>
                        <li><strong>Occlusion Culling</strong><br />
                            에셋의 스케일이 너무 거대해, 언리얼엔진 기본 오클루전 컬링에서 제대로 지워지지 않는 에셋이 많았습니다. Bound 조절로 컬링 범위를 줄이면 에셋이 보여야할 때 사라지는 문제가 발생했습니다.<br />
                            플레이어 기준으로 범위를 조절하여, 일정 시야/범위 밖 액터를 직접 지우는 방식으로 작업을 진행하였습니다.
                        </li>
                    </ol>
                </li>
                <li><strong>Post Process Material</strong><br />
                    공간감 구성을 위해, 카메라 페이드 효과를 블루프린트 <code>Fade In/OUt</code> 노드가 아닌 직접 포스트 프로세스 메테리얼 제작을 통해 어둠이 다가오고 멀어지는 쉐이더를 작업했습니다.
                </li>
            </ul>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 4.27</strong><br />
                    전체 시스템은 블루프린트 기반으로 작업되었습니다. 
                </li>
            </ul>
        </div>
    )
}

export default Page;