export { default as Analytics } from '../../components/analytics.vue'
export { default as BuildingWalk } from '../../components/buildingWalk.vue'
export { default as BusCart } from '../../components/busCart.vue'
export { default as BuscartPicker } from '../../components/buscartPicker.vue'
export { default as CaddieFloorBackup } from '../../components/caddieFloorBackup.vue'
export { default as CaddieFloorView } from '../../components/caddieFloorView.vue'
export { default as CaddieReport } from '../../components/caddieReport.vue'
export { default as CaddieView } from '../../components/caddieView.vue'
export { default as DishpitView } from '../../components/dishpitView.vue'
export { default as EventStepper } from '../../components/eventStepper.vue'
export { default as Events } from '../../components/events.vue'
export { default as GenericVueComponent } from '../../components/genericVueComponent.vue'
export { default as GsView } from '../../components/gsView.vue'
export { default as ManagerView } from '../../components/managerView.vue'
export { default as RedYellowGreenSelector } from '../../components/redYellowGreenSelector.vue'
export { default as StatusBusCart } from '../../components/statusBusCart.vue'
export { default as Test } from '../../components/test.vue'
export { default as UpdateBusCartRYG } from '../../components/updateBusCartRYG.vue'
export { default as PartsBottomBin } from '../../components/parts/BottomBin.vue'
export { default as PartsBottomShelf } from '../../components/parts/BottomShelf.vue'
export { default as PartsCart } from '../../components/parts/Cart.vue'
export { default as PartsLinens } from '../../components/parts/Linens.vue'
export { default as PartsLiquids } from '../../components/parts/Liquids.vue'
export { default as PartsSecondShelf } from '../../components/parts/SecondShelf.vue'
export { default as PartsSilverware } from '../../components/parts/Silverware.vue'
export { default as PartsTopBin } from '../../components/parts/TopBin.vue'
export { default as PartsTowels } from '../../components/parts/Towels.vue'
export { default as PartsTrash } from '../../components/parts/Trash.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
