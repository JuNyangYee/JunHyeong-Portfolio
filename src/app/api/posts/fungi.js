const Page = {
    info: {
        title: "The Future is Fungi",
        date: "2021. 08 ~ 2021. 10\n· FutureShow 2021 전시",
        about: "언리얼엔진4 기반 미디어 아트 작품 제작에 테크니컬 아티스트로 참여하였습니다.",
        thumbnail: "/images/works/Fungi/Fungi_Thumbnail.png",
        tags: ["Unreal Engine", "Niagara", "Tech Art"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: true,
        fab_video_url: "https://vimeo.com/868189347",
        fab_link: false,
        fab_link_url: "",
    },

    imgData: [
        {
            index: 1,
            title: "썸네일",
            url: "/images/works/Fungi/Fungi_Thumbnail.png",
            alt: "Thumbnail"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                컨텐츠 테크니컬 아티스트로 참여한 미디어 아트 작품이며, <strong>VR Topos 스튜디오</strong>와 협업하여 작업을 진행했습니다.<br />
                해당 작품은 퓨쳐쇼 2021에 전시되었습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <p>
                나이아가라 이펙트 제작 및 룩뎁 작업을 기반으로 최적화 작업까지 진행했습니다.
            </p>

            <ul>
                <li><strong>나이아가라 이펙트 제작</strong><br />
                    나이아가라를 활용해 이펙트 제작을 진행했습니다. <br />
                    오브젝트를 따라 이동하는 이펙트들은, Mesh distance feild 기반으로 이동하도록 제작했습니다.<br />
                    룩뎁에 사용하는 이펙트 이외에, 테크를 진행하는 측에서 사용할 이펙트들은 한 레벨에 모아 확인할 수 있도록 제작했습니다.
                </li>
                <li><strong>최적화</strong><br />
                    전달받은 3D 에셋들의 경우, 폴리곤 갯수가 적게는 2만개에서 많게는 120만개 정도 되는 매우 높은 하이폴리곤 매쉬였습니다.<br />
                    로우폴리로 바꾸기에는 작가가 제작한 매쉬를 수정하기 어려운 상황에 시간도 부족했기에, LOD를 활용해 팝핑 문제 없이 퀄리티 손실이 최대한 없도록 거리와 스케일을 조절했습니다.<br />
                    라이트를 빌드해서 사용해야했기에, 라이트맵도 조절하여 고해상도가 필요하지 않은 부분은 라이트맵 해상도를 낮추어 사용했습니다.
                </li>
                <li><strong>룩뎁 · 라이팅</strong><br />
                    전달받은 에셋을 활용한 룩뎁과, 라이팅을 진행했습니다.<br />
                    앞서 LOD 설정을 진행했지만, 여전히 프레임드랍 문제가 남아있었습니다.<br />
                    관객이 움직이는 범위가 넓지 않기에, 한정된 범위 내에서 가능한 에셋을 최소화하여 작업했습니다. 이외의 범위는 간단하게 제작했습니다.<br />
                    몽환적이고 신비로운 느낌을 위해 사용한 Fog와 이펙트들은 가능한 최적화에 문제가 되지 않도록 설정했습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                첫 단계에서는 이펙트 위주로 진행했으나, 점차 룩뎁과 최적화까지 진행하게 되면서 테크니컬 아티스트 파트가 되었던 작업이었습니다. <br />
                작업을 진행하면서 IR 센싱이 어떻게 이루어지고 어느 정도로 최적화가 되어있는지 확인이 어려워 최적화에 애를 좀 먹었지만, 꽤 많은 부분을 축소했음에도 예쁜 결과가 나온 것 같아 만족스럽게 마무리 된 것 같습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 4.26</strong><br />
                    나이아가라 이펙트 작업과 룩뎁 · 최적화를 진행했습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;