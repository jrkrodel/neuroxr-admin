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
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Home Features")
                    .filter('_type == "feature" && page == "home"')
                ),
              S.listItem()
                .title("About")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("About Features")
                    .filter('_type == "feature" && page == "about"')
                ),
              S.listItem()
                .title("Our Research")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Our Research Features")
                    .filter('_type == "feature" && page == "our-research"')
                ),
              S.listItem()
                .title("Resources & Equipment")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Resources & Equipment Features")
                    .filter(
                      '_type == "feature" && page == "resources-equipment"'
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Cards")
        .child(
          S.list()
            .title("Cards by Type")
            .items([
              S.listItem()
                .title("Resource/Equipment")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Resource/Equipment")
                    .filter('_type == "card" && type == "equipment"')
                ),
              S.listItem()
                .title("Roles")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Roles")
                    .filter('_type == "card" && type == "role"')
                ),
              S.listItem()
                .title("Student/Collaborator")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Student/Collaborator")
                    .filter('_type == "card" && type == "sc"')
                ),
              S.listItem()
                .title("Student Roles")
                .child(
                  S.documentList()
                    .defaultOrdering([{ field: "order", direction: "asc" }])
                    .title("Student Roles")
                    .filter('_type == "card" && type == "sRole"')
                ),
            ])
        ),
      S.listItem()
        .title("Research Docs")
        .child(
          S.documentList()
            .defaultOrdering([{ field: "order", direction: "asc" }])
            .title("Research Docs")
            .filter('_type == "research_doc"')
        ),

      // S.divider(),
      // The rest of this document is from the original manual grouping in this series of articles
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["feature", "card", "research_doc"].includes(listItem.getId())
      ),
    ]);
