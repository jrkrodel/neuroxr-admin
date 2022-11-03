import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Features")
        .child(
          S.list()
            .title("Features by Page")
            .items([
              S.listItem()
                .title("Home")
                .child(
                  S.documentList()
                    .title("Home Features")
                    .filter('_type == "feature" && page == "home"')
                ),
              S.listItem()
                .title("About")
                .child(
                  S.documentList()
                    .title("About Features")
                    .filter('_type == "feature" && page == "about"')
                ),
              S.listItem()
                .title("Our Research")
                .child(
                  S.documentList()
                    .title("Our Research Features")
                    .filter('_type == "feature" && page == "research"')
                ),
              S.listItem()
                .title("Resources & Equipment")
                .child(
                  S.documentList()
                    .title("Resources & Equipment Features")
                    .filter(
                      '_type == "feature" && page == "resources_equipment"'
                    )
                ),
            ])
        ),
      S.divider(),
      // The rest of this document is from the original manual grouping in this series of articles
      ...S.documentTypeListItems().filter(
        (listItem) => !["feature"].includes(listItem.getId())
      ),
    ]);
