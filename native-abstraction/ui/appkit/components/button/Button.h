#pragma once

#include "../view/View.h"
#include <functional>
#include <iostream>

namespace rehax::ui::appkit::impl {

class Button : public View {

public:
  RHX_EXPORT static ObjectPointer<Button> Create();
  RHX_EXPORT static ObjectPointer<Button> CreateWithoutCreatingNativeView();
  RHX_EXPORT static std::string ClassName();

  RHX_EXPORT virtual std::string instanceClassName() override;
  RHX_EXPORT virtual std::string description() override;

  RHX_EXPORT virtual void createNativeView() override;

  RHX_EXPORT void setTitle(std::string title);
  RHX_EXPORT std::string getTitle();

  // RHX_EXPORT void setTitleColor(Color color);

  RHX_EXPORT void setOnPress(std::function<void(void)> onPress);
};

}
