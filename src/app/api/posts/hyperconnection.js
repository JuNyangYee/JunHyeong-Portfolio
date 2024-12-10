const Page = {
    info: {
        title: "Hyper Connection: VR",
        date: "2024. 08 ~ 2024. 09\n· Kiaf SEOUL 2024 VR 전시",
        about: "언리얼엔진 PC 컨텐츠를 VR 컨텐츠로 포팅하는 작업을 진행했습니다.",
        thumbnail: "/images/works/HyperConnection/HyperConnection_Thumbnail.png",
        tags: ["Unreal Engine", "VR", "Tech Art"],
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
            url: "/images/works/HyperConnection/HyperConnection_Thumbnail.png",
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
                <li><strong>프레임 최적화</strong><br />
                    VR의 경우 프레임 드랍이 생기면 멀미/어지러움이 극대화됩니다. 작업에서 프레임 최적화를 위해 가장 많은 고민과 작업을 진행했습니다.<br />
                    <code>vr.PixelDensity</code>를 조절하는 방법도 있겠지만, 해상도는 낮출 수 없는 부분이었어서 다른 방법으로 최적화를 진행했습니다.
                </li>
                <ol>
                    <li><strong>Forward Rendering - without Nanite</strong><br />
                        기존 Lumen으로 설정되어있던 라이팅(Deffered Rendering)이 VR에서는 심한 프레임 드랍을 유발하였습니다. <br />
                        Forward Rendering으로 변경하며 Deffered Rendering 기반의 Lumen과 Nanite는 사용하지 못하게 되었으나,<br />
                        프레임은 기존 <code>2~3fps</code>에서 약 <code>40fps</code> 대. 최종 <code>90fps</code>까지 최적화에 성공하였습니다.
                    </li>
                    <li><strong>Shader Complexity</strong><br />
                        기존 반투명 / 투명 쉐이더를 최대한 제거하고 수정하였습니다.<br />
                        레벨 내에서 이펙트를 제외한 부분들은 Shader Complexity가 <code>Bad</code>를 넘지 않도록 최대한 조절하였습니다.
                    </li>
                    <li><strong>LOD</strong><br />
                        Forward Rendering으로 변경하여 Nanite를 사용하지 못하는 만큼, 폴리곤 최적화가 필요했습니다. <br />
                        기본적으로 거리에 따른 LOD와 함께, 작지만 폴리곤 수가 많은 에셋의 경우 LOD 수치가 높은 것을 디폴트로 설정하여 DCC 툴 없이 최대한 최적화 작업을 진행했습니다.
                    </li>
                </ol>
                <li><strong>동선 최소화</strong><br />
                    이 프로젝트의 경우 관객이 VR에 대해 잘 모르는 일반인 분들이며, 가이드 없이 8분이라는 짧은 시간 안에 체험을 마무리해야하는 작품이기에 텔레포트와 같은 이동 방법은 사용할 수 없었습니다.<br />
                    간단하고 직관적인 컨트롤러 조이스틱을 활용한 이동 방법을 선택했으며, 그에 따른 멀미 유발을 최소화하기 위해 동선을 최소화하였습니다.
                </li>
                <li><strong>Niagara</strong><br />
                    기존 Cascade로 제작되어있던 대부분의 이펙트를 Niagara를 이용해 변경하였습니다.
                </li>
                <li><strong>라이팅 변경</strong><br />
                    Lumen을 사용하지 못해 라이팅 느낌이 많이 달라져 라이팅을 새로 작업하였습니다. <br />
                    옛 라이팅 방식을 사용하면서 최대한 기존 프로젝트와 비슷한 느낌을 내려 노력했습니다.<br />
                    추가적으로 기존 레벨에 아쉬웠던 안개와 같은 부분이나, 부분 포인트/스팟 라이트 등 라이팅 작업을 진행했습니다.
                </li>
                <li><strong>UMG UI 디자인</strong><br />
                    UMG를 활용하여 <code>widget</code>과 <code>stereo layer</code> 기반의 UI 시스템을 제작했습니다.
                </li>
            </ul>
            
            <h4>추가 작업</h4>
            <ul>
                <li><strong>전시 VR 기기 셋업</strong><br />
                    Oculus Quest 2 장비의 초기화 및  Air Link를 활용한 PCVR 무선 세팅을 진행했습니다.
                </li>
                <li><strong>프로젝트 패키징</strong><br />
                    Windows 버전 패키징을 진행해 .exe 실행파일로 간편하게 실행할 수 있도록 패키징하였습니다.
                </li>
                <li><strong>상주 메뉴얼 제작</strong><br />
                    기술 담당자이지만 현장에 있지 못하는 날이 많아, 현장 운영위원들이 확인할 수 있는 메뉴얼을 제작하였습니다. <br />
                    체험 가이드 및 오류 발생 시 해결 방법들을 종류별로 상세하게 적어 현장에서 조치할 수 있도록 했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                다른 사람이 진행하던 프로젝트를 어떤 가이드도 없이 하나하나 확인하면서 작업을 시작했습니다. <br />
                전체적으로 정리가 잘 되어있지 않고, 한글-영문 혼용이 되면서 예상치못한 오류가 발생하는 부분도 있었습니다.<br />
                정해진 가이드나 메뉴얼이 있어야 작업의 유지 · 보수가 원활하게 진행될 수 있겠다고 느꼈던 작업이었습니다.
            </p>
            <p>
                뿐만 아니라, 언리얼엔진 5로 넘어온 후 매번 시네마틱 작업 위주로 하다가 처음 진행한 VR 작업이었습니다.<br />
                언리얼엔진5 VR 문서 뿐 아니라, 루멘과 나나이트 관련한 VR 문서가 거의 없어서 관련 자료를 찾고 작업을 진행하는데에 조금 어려웠던 것 같습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 5.3.2</strong><br />
                    전체 시스템은 블루프린트 기반으로 작업되었습니다. 
                </li>
            </ul>
        </div>
    )
}

export default Page;