<a name="2.1.0"></a>
# [v2.1.0](https://github.com/PioneerCode/pioneer-charts/releases/tag/2.1.0) (2018-09-02)

### Add

* Ability to specify the depth you want the `collapseAllNodes()` function to collapse to.
```typescript
const depth = 1;
pt.ptree.collapseAllNodes(depth);
```

<a name="2.0.3"></a>
# [v2.0.3](https://github.com/PioneerCode/pioneer-charts/releases/tag/2.0.3) (2018-08-31)

### Add

* Public interface to `PioneerTreeComponent` via `IPioneerTreeComponent`

<a name="2.0.2"></a>
# [v2.0.1](https://github.com/PioneerCode/pioneer-charts/releases/tag/2.0.2) (2018-08-24)

### Fixed

* Marked the `PioneerTreeService` in the `PioneerTreeComponent` as public.
This allows a `@ViewChild` reference to the component to have intellisense access.

<a name="2.0.1"></a>
# [v2.0.1](https://github.com/PioneerCode/pioneer-charts/releases/tag/2.0.1) (2018-06-05)

Migration complete. 

<a name="2.0.0-rc.2"></a>
# [v2.0.0-rc.2](https://github.com/PioneerCode/pioneer-charts/releases/tag/2.0.0-rc.2) (2018-06-04)

### Fixed

- Expose IPioneerTreeConfiguration 

<a name="2.0.0-rc.1"></a>
# [v2.0.0-rc.1](https://github.com/PioneerCode/pioneer-charts/releases/tag/2.0.0-rc.1) (2018-06-04)

### Added

- Support for Angular >= 5.x.
- Utilizes native CLI package build.

### Removed  

- Support for Angular < 5.x
