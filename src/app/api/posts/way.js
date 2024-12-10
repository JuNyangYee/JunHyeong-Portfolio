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
                <strong>Team. 1llusion</strong> 에서 테크니컬 아티스트로 참여해 작업했습니다.<br />
                언리얼엔진을 이용한 VR 인터랙티브 미디어 아트 작품이며, <br />
                한국콘텐츠진흥원 콘텐츠임팩트 프로젝트에 선정되어, 세운상가 세운홀에서 전시를 진행했습니다.<br />
                PC와 VR 두 가지 버전 모두 대응할 수 있도록 제작하였습니다. 
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>
                후디니에서 제작된 에셋들과, FX 파트에서 생성된 내용들을 바탕으로 시스템 구축 및 텍스쳐링/라이팅, 최적화 작업을 진행했습니다.
            </p>

            <ul>
                <li><strong>블루프린트 프로그래밍</strong><br />
                    프로젝트의 전체적인 블루프린트 구조를 구축했습니다. <br />
                    가능한 마스터 블루프린트 클래스에서 대부분의 수치를 관리할 수 있도록 하여, 팀원들이 직접 수치를 조절하기 편리하도록 구성했습니다.
                </li>
                <li><strong>Alembic Cache 컨트롤</strong><br />
                    기존에는 후디니 엔진을 통해 사용자 인터렉션 기반으로 값이 변화하도록 작업하려 했습니다. <br />
                    다만 후디니 엔진이 런타임 빌드는 지원하지 않아 알렘빅 캐시 기반으로 진행했습니다. <br />
                    Houdini에서 생성된 알렘빅 캐시를 플레이하고, 플레이어와 상호작용할 수 있도록 구성했습니다.<br />
                    언리얼엔진 내에서 알렘빅 캐시를 플레이하고 유지될 때 프레임 드랍이 심해져, 알렘빅 캐시 플레이 종료 후 스태틱 메쉬 액터로 변환되도록 설정했습니다.
                </li>
                <li><strong>라이팅</strong><br />
                    크기가 큰 실측 건물 기준의 에셋을 사용하다보니 기존 라이팅 방법으로는 라이트 빌드 오류가 발생하는 문제가 있어, <strong>LPV (Light Propagation Volume)</strong>를 사용하여 빌드없이 실시간 동적 라이팅을 사용했습니다.<br />
                    수정된 라이팅 시스템 기반으로 새롭게 라이팅 작업을 진행했습니다.
                </li>
                <li><strong>UMG UI 디자인</strong><br />
                    PC와 VR 모두 대응할 수 있는 UI를 작업했습니다.<br />
                    VR의 경우 <code>widget</code>과 <code>stereo layer</code> 기반의 UI 시스템을 구성했습니다.
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
                        <li>
                            <strong>Occlusion Culling</strong><br />
                            에셋의 스케일이 너무 거대해, 언리얼엔진 기본 오클루전 컬링에서 제대로 지워지지 않는 에셋이 많았습니다. Bound 조절로 컬링 범위를 줄이면 에셋이 보여야할 때 사라지는 문제가 발생했습니다.<br />
                            플레이어 기준으로 범위를 조절하여, 일정 시야/범위 밖 액터를 직접 지우는 방식으로 작업을 진행하였습니다.
                        </li>
                    </ol>
                </li>
                <li>
                    <strong>Post Process Material</strong><br />
                    공간감 구성을 위해, 카메라 페이드 효과를 블루프린트 <code>Fade In/Out</code> 노드가 아닌 직접 포스트 프로세스 메테리얼 제작을 통해 어둠이 다가오고 멀어지는 쉐이더를 작업했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                작업 당시 개인 데스크탑의 사양입니다.<br />
                당시 30시리즈의 그래픽카드가 계속해서 공개되고 있는 시기였던 만큼, 사양이 꽤 낮은 편이었습니다.
            </p>
            <table style={{"marginTop": "-20px"}}>
                <tbody>
                    <tr>
                        <th>CPU</th>
                        <td>AMD Ryzen 2600</td>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <td>32GB</td>
                    </tr>
                    <tr>
                        <th>GPU</th>
                        <td>GTX 1060 3GB</td>
                    </tr>
                </tbody>
            </table>
            <p>
                전시에 사용한 PC는 당시 최고사양 PC였지만, 그 PC로 작업을 할 수 없다보니,  <br />
                모든 최적화를 제 개인 PC에 맞춰서 진행하게 되었습니다.<br />
                그렇게 오히려 낮은 사양의 기준으로 작업을 진행하니, 추후 전시에서 원활하게 실행되었던 것 같습니다.<br />
            </p>
            <p>
                지금은 고사양으로 다시 데스크탑을 맞췄지만, <br />
                그 이후로, 저사양 테스트를 대비해 여전히 옛 PC를 남겨두고 있습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 4.26.2</strong><br />
                    전체 시스템은 블루프린트 기반으로 작업되었습니다. <br />
                </li>
                <li><strong>Substance Designer</strong><br />
                    메가스캔 메테리얼 이외에 제작이 간단하게 필요한 텍스쳐들을 제작해서 사용하였습니다. <br />
                </li>
                <li><strong>TortoiseSVN</strong><br />
                    여러 팀원이 작업하기에, TortoiseSVN을 활용해 버전 관리를 진행했습니다.<br />
                </li>
            </ul>
        </div>
    )
}

export default Page;